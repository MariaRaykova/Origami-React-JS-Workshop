import React, { useContext } from 'react'
import styles from './index.module.css';
import LinkComponent from '../link'
import getNavigation from '../../utils/navigation'
import UserContext from '../../context'

const Aside = () => {
    const { user } = useContext(UserContext)

    const links = getNavigation( user)
    return (
        <aside className={styles["aside"]}>
            {
                links.map(nav => {
                    return (
                        <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="aside" />
                    )
                })
            }
        </aside>
    )
}
export default Aside