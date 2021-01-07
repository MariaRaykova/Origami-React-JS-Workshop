import React, { useState } from 'react'
import UserContext from './context'

const App = (props) => {
    const [user, setUser] = useState(props.user ? {
        ...props.user,
        loggedIn: true
    } : null)
    const posts = props.posts || []

    const logIn = (userObject) => {
        setUser({
            ...userObject,
            loggedIn: true
        })
    }
    
    const logOut = () => {
        document.cookie = "x-auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setUser({
            loggedIn: false
        })
    }

    return (
        <UserContext.Provider value={{
            user,
            logIn: logIn,
            logOut: logOut,
            posts
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default App 