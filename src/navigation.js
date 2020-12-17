import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Publications from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts-page'
import ProfilePage from './pages/profile-page'
import RegisterPage from './pages/register-page'
import LoginPage from './pages/login-page'
import ErrorPage from './pages/error-page'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Publications} />
                <Route path="/share" component={ShareThoughtsPage} />
                <Route path="/profile/:userid" component={ProfilePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} /> 
                <Route component={ErrorPage} /> 
            </Switch>
        </BrowserRouter>
    )
}
const LazyNavigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Suspense fallback={<h1>Loading....</h1>}>
                <Route path="/" exact component={lazy(() => import('./pages/publications'))} />
                <Route path="/share" component={lazy(() => import('./pages/share-thoughts-page'))} />
                <Route path="/profile/:userid" component={lazy(() => import('./pages/profile-page'))} />
                <Route path="/register" component={lazy(() => import('./pages/register-page'))} />
                <Route path="/login" component={lazy(() => import('./pages/login-page'))} /> 
                <Route component={lazy(() => import('./pages/error-page'))} /> 
                </Suspense>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation