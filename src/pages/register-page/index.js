import React, { Component } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import PageWrapper from '../../page-wrapper'
import SubmitButton from '../../components/button'
import Input from '../../components/input'

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

    render() {
        const { email, password, rePassword } = this.state
        return (
            <PageWrapper>
                <div className={styles.register}>
                    <Title title="Register Page" />
                    <form className={styles.form}>
                        <Input
                            value={email}
                            onChange={(e) => this.onChange(e, 'email')}
                            label="Email"
                            id='email' />
                        <Input
                            value={password}
                            onChange={(e) => this.onChange(e, 'password')}
                            label="Password"
                            id='password' />
                        <Input
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