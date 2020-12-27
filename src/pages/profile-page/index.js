import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styles from './index.module.css'
import PageWrapper from '../../page-wrapper'
import Posts from '../../components/posts'
import UserContext from '../../context'
import ErrorBoundary from '../../error-boundery'

const ProfilePage = () => {
    const [username, setUsername] = useState(null)
    const [posts, setPosts] = useState(null)
    const context = useContext(UserContext)
    const params = useParams()
    const history = useHistory()

    const getData = useCallback(async () => {
        const id = params.userid
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)
        if (!response.ok) {
            history.push('/error')
        } else {
            const user = await response.json()
            setUsername(user.username)
            setPosts(user.posts)
        }
    }, [params.userid, history]) 

    useEffect(() => { 
        getData()
    }, []) 

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    if (!username) {
        return (
            <PageWrapper>
                <div>Loading...</div>
            </PageWrapper>
        )
    }
    return (
        < PageWrapper>
            <div className={styles.profile}>
                <img className={styles.img} src="" alt="profile" />
                <div className={styles.info}>
                    <p className={styles.p}>
                        <span>Username: </span>
                        {username}
                    </p>
                    <p className={styles.p}>
                        <span>Posts: </span>
                        {posts}
                    </p>
                    <button onClick={logOut}>Logout</button>
                </div>
                <div>
                    <ErrorBoundary>
                        <h2 className={styles.h2}>3 of your recent posts</h2>
                        <Posts length={3} />
                    </ErrorBoundary>
                </div>
            </div>
        </PageWrapper>
    )
}
export default ProfilePage;