import axios from 'axios'
import { useState } from 'react'


const Signup = (props)=> {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [budget, setBudget] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/create`,{ name, email, password})
        .then((response)=>{
            props.setUser(response.data.user)
            localStorage.setItem('userId', response.data.user.id)
        })
        .catch((error)=>{
            console.log(error);
        })

    }



    return(
        <div>
            Signup page
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="new-name"></label>
                    <input id="new-name" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder ="Name" />
                </div>
                <div>
                    <label htmlFor="new-email"></label>
                    <input id="new-email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="new-password"></label>
                    <input id="new-password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                </div>
                <div>
                    <label htmlFor="new-budget"></label>
                    <input id="new-budget" type="budget" value={budget} onChange={(e)=>{setBudget(e.target.value)}} placeholder="Budget"/>
                </div>
                <button className= "btn"> Signup </button>

            </form>

        </div>
    )
}

export default Signup
