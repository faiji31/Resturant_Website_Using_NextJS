"use client"
import React, { createContext, useState } from 'react'


export const CartContext = createContext()

const CartProviderContext = ({children}) => {
    const [cart,setCart] = useState([])

    const addtoCart = (item) =>{
        setCart([item,...cart])

    }
    const cartInfo ={
        addtoCart,
        cart
    }
  return (
    
    <CartContext value={cartInfo}>{children}</CartContext>
  )
}

export default CartProviderContext