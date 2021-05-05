import {Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { AppContext } from '../context/appContext'

const Navbar = ()=>{

    const { userState, fetchUser } = useContext(AppContext)
    const [user, setUser] = userState


    return(
        <div>
        <nav><ul>

             <li><Link to= '/'>Home</Link>{' | '}</li>
            {user.id ?
            <>
            <li><Link to= '/overview'>Overview</Link> </li>
            <li onClick = {() => {
                localStorage.removeItem('userId')
                setUser({})
            }}> Logout </li> </>
            :


            <>
            <li><Link to= '/login'>Login</Link>{' | '}</li>
            <li><Link to= '/signup'>Sign-up</Link>{' | '}</li>

            </>
             }

        </ul>
         </nav>

        </div>



    )
}

export default Navbar
