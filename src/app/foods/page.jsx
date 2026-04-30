import FoodCard from '@/components/cards/FoodCard';
import React from 'react'
import CartItems from './[id]/CartItems';
import InputSearch from '@/components/InputSearch';

const getFoods = async (search) => {
    const res = await fetch(` https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`)
    const data = await res.json()
    await new Promise (resolve => setTimeout(resolve,3000))
    return data.foods || [];
}

const FoodPage = async({searchParams}) => {
  const {search = ""} = await searchParams;
 


    const foods = await getFoods(search);

    
  return (
    <div>
      <h2 className='text-4xl font-bold'> Total Foods: <span className='text-green-800'>{foods.length} </span> Found</h2>
      <div className='my-4'>
        <InputSearch></InputSearch>
      </div>

       <div className='flex gap-5'>
        <div className='grid grid-cols-3 gap-5 my-5'>
          {
            foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
          }
        </div>
        <div className='w-[350px] border-2 rounded-xl p-4'>
          <h2 className='text-2xl font-bold'>Cart Items</h2> <hr />

          <CartItems></CartItems>

        </div>
       </div>
    </div>
  )
}

export default FoodPage
