import React from 'react'
import { Link } from 'react-router-dom'
import MyTravels from '../../components/MyTravels'
import barbarcar from '../../assets/Barbacar.png'


function Profile() {
  return (
    <div>

      <h3>My Profile</h3>

    <br />
    <img src={barbarcar} alt="barbarcar" height={'170px'} />
    <br />
    <Link to= {'/travels/add'} className='link'> <button className="myButton">Add Travel</button></Link>
    <MyTravels/> 
    

    </div>
  )
}

export default Profile