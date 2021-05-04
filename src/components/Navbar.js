import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <div>
        <nav>
         <Link to= '/'>Home</Link>{' | '}
         <Link to= '/login'>Login</Link>{' | '}
         <Link to= '/signup'>Sign-up</Link>{' | '}
         <Link to= '/overview'>Overview</Link>
         </nav>
        </div>



    )
}

export default Navbar
