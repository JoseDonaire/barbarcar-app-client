import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { getReviewService } from '../services/review.services'


function GetReview() {

    const navigate = useNavigate()

    const [listReviews,setListReviews]=useState([])
    const [isFetching,setIsFetching]=useState(true)

    useEffect(()=>{
        getListReviews()
    },[])

    const getListReviews = async ()=>{
        try {
            const response = await getReviewService(listReviews)
            console.log(response.data)
            setListReviews(response.data)
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
        {listReviews.map((eachReview)=>{
            return <p key={eachReview._id}>
                {eachReview.text}
            </p>
        })}

    </div>
  )
}
export default GetReview