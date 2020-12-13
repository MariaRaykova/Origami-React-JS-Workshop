import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Publications from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts-page'
//import ProfilePage from './pages/profile-pagee'
import RegisterPage from './pages/register-page'
import LoginPage from './pages/login-page'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                 {/* <Route path="/profile" component={ProfilePage} /> */}
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} /> 
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation