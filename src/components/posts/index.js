import React, { useState, useCallback, useEffect } from 'react'
import styles from './index.module.css'
import Origami from '../origami'
import getOrigamis from '../../utils/origamis'

const Posts = (props) => {
    const [posts, setPosts] = useState([])
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
