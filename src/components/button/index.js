import React from 'react'
import styles from './index.module.css'

const SubmitButton = ({ title, onClick }) => {

    return (
        <button className={styles.button} type="submit" onClick={onClick}>{title}</button>
    )
}
export default SubmitButton