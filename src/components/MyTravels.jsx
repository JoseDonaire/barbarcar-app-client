import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {myTravelService,travelDeleteService} from '../../services/travel.services'

function MyTravels() {

  const navigate = useNavigate()

  const {idTravel}= useParams()

  const [myTravels,setMyTravels]= useState([])
  const [isFetching,setIsFetching]=useState(true)

  useEffect(()=>{
    getTravels()
  },[])
  const getTravels = async ()=>{
    try {
      const response = await myTravelService(idTravel)
      console.log('mis viajes', response.data)
      setMyTravels(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate('/error')
    }
  }

  const handleDelete = async ()=>{
    try {
      await travelDeleteService(idTravel)
      navigate('/travels')
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
        </p>   
        
      })}
      <Link to={`/travels/${idTravel}/edit`}><button>Edit</button></Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default MyTravels