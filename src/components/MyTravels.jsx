import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {myTravelService,travelDeleteService} from '../services/travel.services'

function MyTravels() {

  const navigate = useNavigate()
  


  const [myTravels,setMyTravels]= useState([])
  const [isFetching,setIsFetching]=useState(true)

  useEffect(()=>{
    getTravels()
  },[])
  const getTravels = async ()=>{
    try {
      const response = await myTravelService()
      console.log('mis viajes', response.data)

      setMyTravels(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate('/error')
    }
  }

  const handleDelete = async (idTravel)=>{
    try {
      await travelDeleteService(idTravel)
      navigate('/profile')
    } catch (error) {
      navigate('/error')
      
    }
  }

  if(isFetching === true){
    return <h3>...</h3>
  }

  return (
    
    <div>
      {myTravels.map((eachTravel)=>{
        return <p key={eachTravel._id}>
        <Link to={`/travels/${eachTravel._id}/details`}>{eachTravel.from}-{eachTravel.to}</Link>
        <Link to={`/travels/${eachTravel._id}/edit`}><button>Edit</button></Link>
        <button onClick={()=>handleDelete(eachTravel._id)}>Delete</button>  
        </p>   
        
      })}
      
    </div>
  )
}

export default MyTravels