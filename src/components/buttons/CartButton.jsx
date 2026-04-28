"use client"
import React, { useState } from 'react'

const CartButton = () => {
    const [inCart,setIncart] = useState(false)
    const handleaddtocart=()=> {
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
