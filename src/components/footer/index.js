import React from 'react'
import styles from './index.module.css';
import LinkComponent from '../link'
import logo from '../../images/blue-origami-bird-flipped.png'
import getNavigation from '../../utils/navigation'
const Footer = () => {
    const links = getNavigation()
    return (
        <footer className={styles.footer}>
           <img className={styles.img} src={logo} alt="logo"/>

           {
                links.map(nav =>{
                    return(
                        <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="footer"/>
                    )
                })
            }
      
        </footer>
    )
}
export default Footer