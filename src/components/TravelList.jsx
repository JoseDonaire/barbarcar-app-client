import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { travelListService } from '../services/travel.services'
 

function TravelList() {

  const navigate = useNavigate()

  const [allTravels,setAllTravels]= useState([])
  const [isFetching,setIsFetching]=useState(true)

  useEffect(()=>{
    getTravels()
  },[])
  const getTravels = async ()=>{
    try {
      const response = await travelListService()
      console.log('aqui', response.data)
      setAllTravels(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate('/error')
    }
  }
  if(isFetching === true){
    return <h3>...</h3>
  }

  return (
    
    <div className='all'>
    
      
      {allTravels.map((eachTravel)=>{
        
        return(
        <div className='div'>
        <p key={eachTravel._id}>
        <Link to={`/travels/${eachTravel._id}/details`} className='link'>{eachTravel.from}-{eachTravel.to}</Link>  
        </p>  
        </div>
 
        ) 
      })}
      </div>

 
  )
}

export default TravelList