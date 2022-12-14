import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";

function Signup() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage]=useState('')

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();
    const user ={
      username: username,
      email: email,
      password: password
    }
    try {
      await signupService(user)
      navigate('/login')
      
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

      <h1>Sign Up</h1>

      <form onSubmit={handleSignup}>
        <label>Name:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
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
        <button type="submit" className="myButton">Signup</button>
      </form>
      
    </div>
  );
}

export default Signup;