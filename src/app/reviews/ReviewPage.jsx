"use client"
import ReviewCard from '@/components/cards/Reviewcard'
import { Anek_Bangla } from 'next/font/google'
import React, { useEffect, useState } from 'react'


const anek = Anek_Bangla({
    weight:["400","500","700"]
})




const  ReviewsPage =() => {
  const [reviews,setReviews] = useState([])
  useEffect(()=>{
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
    .then(res=>res.json())
    .then(data=> setReviews(data.reviews  || []))
  },[])


 
  return (
    <div className={anek.className}>
      <h2 className='text-4xl font-bold'> Total Reviews: <span className='text-green-800'>{reviews.length} </span> Found</h2>
      
            <div className='grid grid-cols-3 gap-5 my-5'>
              {
                reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))
              }
    </div>
    </div>
  )
}

export default ReviewsPage
