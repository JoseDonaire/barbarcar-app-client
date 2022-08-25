import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GetReview from '../../components/GetReview'
import { profileServiceDriver } from '../../services/profile.services'
import { useState } from 'react'

function ProfileDriver() {
  
  const {idDriver} = useParams()
  const navigate = useNavigate()

  const[profileDriver, setProfileDriver] = useState(null)

  useEffect(()=>{
    getProfileDriver()
  },[])

  const getProfileDriver = async ()=> {
      try {
   const response = await profileServiceDriver(idDriver)
   console.log(response.data)
   setProfileDriver(response.data)

    
   } catch (error) {
    navigate ('/error')
    }
  }


  return (
    <div>
    <h1>hola</h1>
    </div>
  )
}

export default ProfileDriver