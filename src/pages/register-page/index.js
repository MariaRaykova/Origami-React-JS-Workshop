import React, { Component } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import PageWrapper from '../../page-wrapper'
import SubmitButton from '../../components/button'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../context'
class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }
    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
        this.setState(newState)
    }
    static contextType = UserContext

    handleSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        await authenticate(
            'http://localhost:9999/api/user/register', 
            {username, password}, 
            (user) => {
                this.context.logIn(user)
                this.props.history.push('/') 
            }, 
            (e)=>{
                console.log(e)
            }
        )
    }
    render() {
        const { username, password, rePassword } = this.state
        return (
            <PageWrapper>
                <div className={styles.register} >
                    <Title title="Register Page" />
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <Input
                            value={username}
                            onChange={(e) => this.onChange(e, 'username')}
                            label="Username"
                            id='username' />
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => this.onChange(e, 'password')}
                            label="Password"
                            id='password' />
                        <Input
                            type='password'
                            value={rePassword}
                            onChange={(e) => this.onChange(e, 'rePassword') }
                            label="Re-Password"
                            id='re-password' />
                        <div className={styles.form}>
                            <SubmitButton title="Register" />
                        </div>
                    </form>
                </div>
            </PageWrapper>
        );
    }

}
export default RegisterPage;