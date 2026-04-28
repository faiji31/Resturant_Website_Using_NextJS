import FoodSkeleton from '@/components/skeleton/FoodCardSkeleton'
import React from 'react'

function loading() {
  return (
    <div className='grid grid-cols-3 my-5 gap-5'>
      {
        [...Array(12)].map((_,index)=><FoodSkeleton key={index}></FoodSkeleton>)
      }
    </div>
  )
}

export default loading
