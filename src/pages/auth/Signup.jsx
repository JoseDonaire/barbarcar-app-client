import React from 'react'
import{useState} from 'react'

function Signup() {
  const [username,setUserName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState('');
  const[errorMessage,setErrorMessage]=useState('');


  try {
    
  } catch (error) {
    console.log(error)
  }


  return (
    <div>Signup</div>
  )
}

export default Signup