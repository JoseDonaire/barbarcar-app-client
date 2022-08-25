import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GetReview from '../../components/GetReview'
import { profileServiceDriver } from '../../services/profile.services'
import Review from '../../components/Review'

function ProfileDriver() {
  
  const {idDriver} = useParams()
  const navigate = useNavigate()

  const[profileDriver, setProfileDriver] = useState(null)
  const[isFetching,setIsFetching]=useState(true)

  useEffect(()=>{
    getProfileDriver()
  },[])

  const getProfileDriver = async ()=> {
      try {
   const response = await profileServiceDriver(idDriver)
   console.log('hola',response.data)
   setProfileDriver(response.data)
   setIsFetching(false)
    
   } catch (error) {
    navigate ('/error')
    }
  }

  if(isFetching === true){
    return <h3>...</h3>
  }

  return (
    <div>
    <h1>{profileDriver.username} Profile</h1>

    
    <Review/>
    <GetReview/>
    </div>
  )
}

export default ProfileDriver