"use client"
import { CartContext } from '@/context/CartProviderContext'
import React, { use, useState } from 'react'

const CartButton = ({food}) => {
    const [inCart,setIncart] = useState(false)
    const {addtoCart} = use(CartContext)

    const handleaddtocart =()=>{
      addtoCart(food)
      setIncart(true)
    }
  return (
      <button disabled={inCart} onClick={handleaddtocart} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-md transition disabled:bg-gray-400">
        {
              inCart ? "Added to Cart" :"     🛒 Add Cart"
        }
     
      </button>
  )
}

export default CartButton
