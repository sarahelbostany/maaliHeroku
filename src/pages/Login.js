import axios from 'axios'
import { useState } from 'react'

const Login = (props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`,{ email, password})
        .then((response)=>{
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.user.id)
        })
        .catch((error)=>{
            console.log(error);
            })
        }


        return(
            <div className = "login">
                <h3>Welcome Back!</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="new-email"></label>
                        <input className = "loginInput" id="new-email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="new-password"></label>
                        <input className = "loginInput" id="new-password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                    </div>
                    <br></br>
                    <input className = "loginBtn" type="submit" value="Login"/>


                </form>

            </div>
        )
    }
export default Login
