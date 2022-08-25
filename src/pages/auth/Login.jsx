import { useState, useContext } from "react";
import { loginService } from "../../services/auth.services";
import {useNavigate} from 'react-router-dom'

import {AuthContext} from '../../context/auth.contex'

function Login() {
  
  const {authenticateUser} =useContext(AuthContext)

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage]=useState('')

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    const user ={
      username: username,
      password: password
    }
      try {
    const response = await loginService(user)
    console.log(response.data)

    const authToken = response.data.authToken
    localStorage.setItem('authToken', authToken)
    authenticateUser()
    navigate('/')

  } catch (error) {
    if(error.response.status ===400){
      setErrorMessage(error.response.data.errorMessage)
    }else{
      navigate('/error')
    }
  }
  };

  return (
    <div>
      
      <h1>Log In</h1>

      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        {errorMessage ? <p>{errorMessage}</p>: null }
        <br />
        <button type="submit" className="myButton">Login</button>
      </form>
      
    </div>
  );
}

export default Login;