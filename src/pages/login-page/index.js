import React, { useState,  useContext} from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../register-page/index.module.css'
import Title from '../../components/title'
import PageWrapper from '../../page-wrapper'
import SubmitButton from '../../components/button'
import Input from '../../components/input'
import authenticate from '../../utils/authenticate'
import UserContext from '../../context'

const LoginPage =()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const context = useContext(UserContext)
    const history = useHistory() 

    const handleSubmit = async (event) => {
        event.preventDefault()
       
        await authenticate('http://localhost:9999/api/user/login', 
        {username, password}, 
        (user) => { 
            context.logIn(user)
            history.push('/')}, 
            (e) => {console.log(e)}
        )
    }

    return(
        <PageWrapper>
        <div className={styles.register}>
            <Title title="Login Page" />
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
                <div className={styles.form}>
                    <SubmitButton title="Login" />
                </div>
            </form>
        </div>
    </PageWrapper>
    )
}
export default LoginPage;