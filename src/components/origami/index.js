import React from 'react'
import styles from './index.module.css';
import logo from '../../images/blue-origami-bird.png'

const Origami = ({ description, author, index }) => {
    return (
        <div className={styles.post}>
        <img className={styles.img} src={logo} alt="logo"/>
            <p className={styles.description}>
            <span>{index} - </span>
                <div>{description}</div> 
            </p>
            <div className={styles["post-div"]}>
                <span className={styles.user}>
                    <small>Author: </small>
                    {author.username}
                </span>
            </div>
        </div>
    )
}
export default Origami