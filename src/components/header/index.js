import React, { Component } from 'react'
import styles from './index.module.css'
import LinkComponent from '../link'
import logo from '../../images/white-origami-bird.png'
import getNavigation from '../../utils/navigation'
import UserContext from '../../context'

class Header extends Component {
    static contextType = UserContext
    render() {
        const { loggedIn, user } = this.context

        const links = getNavigation(loggedIn, user)
        return (
            <header className={styles.navigation}>
                <img className={styles.logo} src={logo} alt="logo" />

                {
                    links.map(nav => {
                        return (
                            <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="header" />
                        )
                    })
                }

            </header>
        )
    }
}
export default Header