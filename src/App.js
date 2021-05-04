import './App.css';
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import { useState , useEffect, useContext } from 'react'
import { AppContext } from './context/appContext';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Overview from './pages/Overview'


function App() {

  const { userState, fetchUser } = useContext(AppContext)
  const [user, setUser] = userState
  useEffect(fetchUser, [])
  
  return (
    <div className="App">
      <Navbar />

      <Route
        exact path ="/"
        render={() =>
           <Home />
        }
      />

      <Route
        path="/signup"
        render={()=>
          <Signup setUser={setUser}/>
        }
      />

      <Route
        path="/login"
        render={()=>
          <Login setUser={setUser} />
        }
      />

      <Route
        path="/overview"
        render={()=>
          <Overview/>
        }
      />



    </div>
  );
}

export default App;
