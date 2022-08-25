import React from 'react'
import error from "../assets/error.png";

function Error() {
  return (
    <div>
      <p>{'If you are not registered, it is free! Sign Up, Log In and return to Home page to see the available trips'}</p>
      <br />
    <img src={error} alt="Error" height={'300px'}/>
    </div>
  )
}

export default Error