import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TravelList() {
  const [allTravels,setAllTravels]= useState([])
  const [isFetching,setIsFetching]=useState(true)

  useEffect(()=>{
    getTravels()
  },[])
  const getTravels = async ()=>{
    try {
      const response = await axios.get('http://localhost:5005/api/travels')
      console.log('aqui', response.data)
      setAllTravels(response.data)
      setIsFetching(false)
    } catch (error) {
      
    }
  }
  if(isFetching === true){
    return <h3>...</h3>
  }

  return (
    
    <div>
      {allTravels.map((eachTravel)=>{
        return <p key={eachTravel._id}>
        <Link to={`/travels/${eachTravel._id}/details`}>{eachTravel.from}-{eachTravel.to}</Link>  
        </p>   
        
      })}

    </div>
  )
}

export default TravelList