import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useState } from 'react'
import { newReviewService } from '../services/review.services'

function Review() {

  const navigate = useNavigate()

  const {idTravel} =useParams()

  const[text,setText]=useState('')

  const handleTextChange = (event) => setText(event.target.value)

  const handleSubmit = async () =>{
    const newReview = {
      text:text
    }
    try {
      const response = await newReviewService(idTravel,newReview)
      console.log('creado', response.data)
    } catch (error) {
      navigate('/error')
    }
  }
  

  return (
    <div>
        <form >
          <label htmlFor="text">Review</label>
          <input type="text" name='text' onChange={handleTextChange} value={text} />
        </form>
        <button onClick={handleSubmit}>
          Add
        </button>
    </div>
  )
}

export default Review