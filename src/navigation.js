import React, { } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Publications from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts-page'
import ProfilePage from './pages/profile-page'
import RegisterPage from './pages/register-page'
import LoginPage from './pages/login-page'
import ErrorPage from './pages/error-page'

const Navigation = () => {
    return (
        <Switch>
            <Route path="/" exact component={Publications} />
            <Route path="/share" component={ShareThoughtsPage} />
            <Route path="/profile/:userid" component={ProfilePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={ErrorPage} />
        </Switch>
    )
}

export default Navigation