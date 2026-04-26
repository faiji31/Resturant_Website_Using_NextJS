import React from 'react'

const getFoods = async () => {
    const res = await fetch(" https://taxi-kitchen-api.vercel.app/api/v1/foods/random")
    const data = await res.json()
    return data.foods || [];
}

const FoodPage = async() => {

    const foods = await getFoods();

    
  return (
    <div>
      Total items :{foods.length}
    </div>
  )
}

export default FoodPage
