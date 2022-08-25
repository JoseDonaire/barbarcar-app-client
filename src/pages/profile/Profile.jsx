import React from 'react'
import { Link } from 'react-router-dom'
import MyTravels from '../../components/MyTravels'


function Profile() {
  return (
    <div>
    <h3>My Profile</h3>
    imagen de mi coche
    <Link to= {'/travels/add'} className='link'> <button className="myButton">Add Travel</button></Link>
    <MyTravels/> 
    

    </div>
  )
}

export default Profile