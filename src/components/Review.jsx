import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useState } from 'react'
import { newReviewService } from '../services/review.services'

function Review() {

  const navigate = useNavigate()

  const {idDriver} =useParams()

  const[text,setText]=useState('')

  const handleTextChange = (event) => setText(event.target.value)

  const handleSubmit = async () =>{
    const newReview = {
      text:text
    }
    try {
      const response = await newReviewService(idDriver,newReview)
      console.log('creado', response.data)
    } catch (error) {
      navigate('/error')
    }
  }
  

  return (
    <div>
        <form >
          <label htmlFor="text"></label>
          <input type="text" name='text' onChange={handleTextChange} value={text} className='div'/>
        </form>
        <button onClick={handleSubmit} className="myButton" >
          Add
        </button>
    </div>
  )
}

export default Review