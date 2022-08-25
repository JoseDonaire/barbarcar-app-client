import React, { useEffect,useState } from 'react'
import { travelDetailsService, travelDetailsNavigatorService } from '../../services/travel.services'
import { useParams,useNavigate,Link } from 'react-router-dom'
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

  const handleBookTrip = async ()=>{
    try {
    await travelDetailsNavigatorService(idTravel)
    getTravel()
    } catch (error) {
      navigate('/error')
    }
  }

  if(isFetching === true){
    return <h3>...</h3>
  }


  return (
    <div className="all">
    <h4>Detalles del Viaje</h4>
      <div className="divdetails">
        <p>Date:{travel.date}
        <br />
        From: {travel.from}
        <br />
        To: {travel.to}
        <br />
        Car: {travel.Car}
        <br />
        Bags:{travel.bags}
        <br />
        Seats Car:{travel.seatsCar}
        <br />
        Price:{travel.price}
        </p>
        <Link to={`/profile/${travel.owner._id}`} className="link">
          <p>Owner:{travel.owner.username}</p>
        </Link>
      </div>
      <div className="divdetails">
        <p>
          Navigators:{" "}
          {travel.navigator.map((eachNavigator) => {
            return (
              <p>
                <Link to={`/profile/${eachNavigator._id}`} className="link">
                  {eachNavigator.username}
                </Link>
              </p>
            );
          })}
        </p>
        <button
          disabled={travel.navigator.length === travel.seatsCar ? true : false}
          onClick={handleBookTrip}
          className="myButton"
        >
          {" "}
          Book Trip
        </button>
      </div>
    </div>
  );
}

export default TravelDetails