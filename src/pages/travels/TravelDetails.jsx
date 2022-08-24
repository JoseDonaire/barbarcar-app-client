import React, { useEffect,useState } from 'react'
import { travelDetailsService } from '../../services/travel.services'
import { useParams,useNavigate } from 'react-router-dom'
import Review from '../../components/Review'

function TravelDetails() {

  const navigate = useNavigate()

  const {idTravel} = useParams()

  const [travel,setTravel]=useState([])
  const[isFetching,setIsFetching]=useState(true)

  useEffect(()=>{
  getTravel()
  },[])

  const getTravel = async () => {

    try {
      const response = await travelDetailsService(idTravel)
      console.log('detalles viaje',response.data)
      setTravel(response.data)
      setIsFetching(false)
    } catch (error) {
      navigate('/error')
    }
  }

  if(isFetching === true){
    return <h3>...</h3>
  }

  return (
    <div>
      <h4>Detalles del Viaje</h4>
      <p>Date:{travel.date}</p>
      <p>From: {travel.from}</p>
      <p>To: {travel.to}</p>
      <p>Car: {travel.Car} </p>
      <p>Bags:{travel.bags}</p>
      <p>Seats Car:{travel.seatsCar}</p>
      <p>Price:{travel.price}</p>
      <p>Owner:{travel.owner}</p> {/*enviar desde aquí al profile con un populate y un link */}

      <Review/>
    </div>
  )
}

export default TravelDetails