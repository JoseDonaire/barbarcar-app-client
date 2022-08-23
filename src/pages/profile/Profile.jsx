import React from 'react'
import { Link } from 'react-router-dom'
import MyTravels from '../../components/MyTravels'

function Profile() {
  return (
    <div>
    imagen de mi coche
    <Link to= {'/travels/add'}> <button>Add Travel</button></Link>
    {/*<MyTravels/> */}
    reseñas

    </div>
  )
}

export default Profile