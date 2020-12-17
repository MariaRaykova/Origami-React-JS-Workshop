import React, {Component} from 'react'
import styles from './index.module.css';
import LinkComponent from '../link'
import getNavigation from '../../utils/navigation'
import UserContext from '../../context'
class Aside extends Component{
    static contextType = UserContext
    render(){
        const {loggedIn, user} = this.context
     
        const links = getNavigation(loggedIn, user)
        return (
            <aside className={styles["aside"]}>
                  {
                    links.map(nav =>{
                        return(
                            <LinkComponent key={nav.title} href={nav.link} title={nav.title} type="aside"/>
                        )
                    })
                }
            </aside>
        )
    }
}
export default Aside