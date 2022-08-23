import React from 'react'
import { Link } from 'react-router-dom'
import Review from '../../components/Review'
import MyTravels from '../../components/MyTravels'

function Profile() {
  return (
    <div>
    imagen de mi coche
    <Link to= {'/travels/add'}> <button>Add Travel</button></Link>
    <MyTravels/> 
    <Review/>

    </div>
  )
}

export default Profile