import React, { Component } from 'react'
import styles from '../register-page/index.module.css'
import Title from '../../components/title'
import PageWrapper from '../../page-wrapper'
import SubmitButton from '../../components/button'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../context'

class LoginPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }
    static contextType = UserContext

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
        }, (user) => { 
            this.context.logIn(user)
            this.props.history.push('/')
        }, (e) => {
            console.log(e)
        }
        )
    }

    render() {
        const { username, password } = this.state
        return (
            <PageWrapper>
                <div className={styles.register}>
                    <Title title="Login Page" />
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <Input
                            value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label="Username"
                            id='username' />
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            label="Password"
                            id='password' />
                        <div className={styles.form}>
                            <SubmitButton title="Login" />
                        </div>
                    </form>
                </div>
            </PageWrapper>
        );
    }

}
export default LoginPage;