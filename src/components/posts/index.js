import React, { useState, useCallback, useEffect, useContext } from 'react'
import styles from './index.module.css'
import Origami from '../origami'
import getOrigamis from '../../utils/origamis'
import UserContext from '../../context'

const Posts = (props) => {
    const context = useContext(UserContext)
    const [posts, setPosts] = useState(context.post || []) // context.user && context.user.posts ако има context.user да зареди постовете от контекста context.user.posts, но понеже, но user-a е изцяло в контекста за това не ни трябва първата част 
    
    const getPosts = useCallback(async () => {
        const posts = await getOrigamis(props.length)
        setPosts(posts) 
    }, [props.length])
    const renderPosts = () => {
        return posts.map((post, index) => {
            return (
                <Origami key={post._id} index={index} {...post} /> 
            )
        })
    }
    useEffect(()=>{
        getPosts()
    },[props.updatedPosts, getPosts]) 

    return(
        <div className={styles.posts}>
        {renderPosts()}
    </div>
    )
}

export default Posts;
