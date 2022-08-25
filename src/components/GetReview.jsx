import React, { useEffect } from 'react'
import { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { getReviewService } from '../services/review.services'


function GetReview() {

    const {idDriver} = useParams()
    const navigate = useNavigate()

    const [listReviews,setListReviews]=useState([])
    const [isFetching,setIsFetching]=useState(true)

    useEffect(()=>{
        getListReviews()
    },[])

    const getListReviews = async ()=>{
        try {
            const response = await getReviewService(idDriver)
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
    <div className='all'>
        {listReviews.map((eachReview)=>{
            return(
                <div className='div'><p key={eachReview._id}>
                {eachReview.text}
            </p>
            </div>
            ) 
        })}
    </div>
  )
}
export default GetReview