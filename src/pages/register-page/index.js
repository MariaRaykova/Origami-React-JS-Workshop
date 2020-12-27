import React, { useState, useContext, useHistory } from 'react'
import styles from './index.module.css'
import Title from '../../components/title'
import PageWrapper from '../../page-wrapper'
import SubmitButton from '../../components/button'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../context'

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { username, password } = this.state

        await authenticate(
            'http://localhost:9999/api/user/register',
            { username, password },
            (user) => {
                context.logIn(user)
                history.push('/')
            },
            (e) => {
                console.log(e)
            }
        )
    }
    return (
        <PageWrapper>
            <div className={styles.register} >
                <Title title="Register Page" />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        label="Username"
                        id='username' />
                    <Input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        id='password' />
                    <Input
                        type='password'
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        label="Re-Password"
                        id='re-password' />
                    <div className={styles.form}>
                        <SubmitButton title="Register" />
                    </div>
                </form>
            </div>
        </PageWrapper>
    )
}
export default RegisterPage;