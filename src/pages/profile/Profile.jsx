import React from 'react'
import { Link } from 'react-router-dom'
import MyTravels from '../../components/MyTravels'
import GetReview from '../../components/GetReview'

function Profile() {
  return (
    <div>
    imagen de mi coche
    <Link to= {'/travels/add'}> <button>Add Travel</button></Link>
    <MyTravels/> 
    <GetReview/>

    </div>
  )
}

export default Profile