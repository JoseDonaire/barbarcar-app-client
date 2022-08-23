import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { addTravelService } from '../../services/travel.services'

function AddTravel() {

  const navigate = useNavigate()

  const [date,setDate]=useState()
  const [from,setFrom]=useState('')
  const [to,setTo]=useState('')
  const [car,setCar]=useState('')
  const [bags,setBags]=useState(0)
  const [seatsCar,setSeatsCar]=useState(0)
  const [price,setPrice]=useState(0)

  const handleDateChange =(event)=> setDate(event.target.value)
  const handleFromChange =(event)=> setFrom(event.target.value)
  const handleToChange =(event)=> setTo(event.target.value)
  const handleCarChange =(event)=> setCar(event.target.value)
  const handleBagsChange =(event)=> setBags(event.target.value)
  const handleSeatsCarChange =(event)=> setSeatsCar(event.target.value)
  const handlePriceChange =(event)=> setPrice(event.target.value)

  const handleSubmit = async ()=>{
    const newTravel ={
      date:date,
      from:from,
      to:to,
      car:car,
      bags:bags,
      seatsCar:seatsCar,
      price:price,
    }

    try {
      await addTravelService(newTravel)
      navigate('/')
    } catch (error) {
      navigate('/error')
    }

  }


  return (
    <div>
      <form >
        <label htmlFor="date">Date</label>
        <input type="Date" name='date' onChange={handleDateChange} value={date}/>
        <br />
        <label htmlFor="from">From</label>
        <input type="text" name='from' onChange={handleFromChange} value={from}/>
        <br />
        <label htmlFor="to">To</label>
        <input type="text" name='to' onChange={handleToChange} value={to}/>
        <br />
        <label htmlFor="car">Car</label>
        <input type="text" name='car' onChange={handleCarChange} value={car}/>
        <br />
        <label htmlFor="bags">Bags</label>
        <input type="number" name='bags' onChange={handleBagsChange} value={bags}/>  
        <br />
        <label htmlFor="seatsCar">Seats Car</label>
        <input type="number" name='seatsCar' onChange={handleSeatsCarChange} value={seatsCar}/> 
        <br />
        <label htmlFor="price">Price</label>
        <input type="number" name='price' onChange={handlePriceChange} value={price}/> 

        <br />
        
      </form>
        <button onClick={handleSubmit}>Add</button>

    </div>
  )
}

export default AddTravel