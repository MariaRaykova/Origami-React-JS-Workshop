import React, { Component } from 'react'
import styles from './index.module.css'
import PageWrapper from '../../page-wrapper'
import Posts from '../../components/posts'
import UserContext from '../../context'


class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: null
        }
    }
    static contextType = UserContext
    componentDidMount() {
        this.getUser(this.props.match.params.userid)
    }
    getUser = async (id) => {
        const promise = await fetch(`http://localhost:9999/api/user?id=${id}`)
        const user = await promise.json()
        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        })
    }
    logOut = () => {
        this.context.logOut()
        this.props.history.push('/')
    }

    render() {
        const { username, posts } = this.state
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
                        <button onClick={this.logOut}>Logout</button>
                    </div>
                    <div>
                        <h2 className={styles.h2}>3 of your recent posts</h2>
                        <Posts length={3} />
                    </div>

                </div>
            </PageWrapper>

        )
    }
}
export default ProfilePage;