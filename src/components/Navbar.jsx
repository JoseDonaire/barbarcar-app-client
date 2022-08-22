import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import {AuthContext} from  '../context/auth.contex'

function Navbar() {

  const navigate = useNavigate()

  const {isUserActive, authenticateUser } =useContext(AuthContext)

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    authenticateUser()
    navigate("/")

  }

  if(isUserActive === true) {
   return(
    <div>
       <Link to='/'>Home </Link>
       <Link to='/profile'>Profile </Link>
       <button onClick={handleLogout}>Logout</button>
    </div>
   ) 
  }else{
  }
  return (
    <div>
    
    <Link to='/'>Home </Link>
    {/*buscador aquí */}
    <Link to='/signup'>Signup</Link>
    <Link to='/login'>Login</Link>

    
    </div>
  )
}

export default Navbar