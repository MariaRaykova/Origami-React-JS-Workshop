import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Publications from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts-page'
import ProfilePage from './pages/profile-page'
import RegisterPage from './pages/register-page'
import LoginPage from './pages/login-page'
import ErrorPage from './pages/error-page'

const Navigation = () => {

    const context = useContext()
    console.log(context)
    const loggedIn = context.user.loggedIn
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share">
                    {loggedIn ? (< ShareThoughtsPage />) : (< Redirect to="/login" />)}
                </Route>
                <Route path="/profile/:userid">
                {loggedIn ? (< ProfilePage />) : (< Redirect to="/login" />)}
                </Route>
                <Route path="/register">
                {loggedIn ? (< Redirect to="/" />) : (< RegisterPage />)}
                </Route>
                <Route path="/login">
                    {loggedIn ? (< Redirect to="/" />) : (< LoginPage />)}
                </Route>
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation