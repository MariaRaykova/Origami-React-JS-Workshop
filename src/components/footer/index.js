import React, {Component} from 'react'
import styles from './index.module.css';
import LinkComponent from '../link'
import logo from '../../images/blue-origami-bird-flipped.png'
import UserContext from '../../context'
import getNavigation from '../../utils/navigation'

class Footer extends Component {
    static contextType = UserContext
    render() {
        const { loggedIn, user } = this.context
        const links = getNavigation(loggedIn, user)
        return (
            <footer className={styles.footer}>
                <img className={styles.img} src={logo} alt="logo" />

                {
                    links.map(nav => {
                        return (
                            <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="footer" />
                        )
                    })
                }

            </footer>
        )
    }
}
export default Footer