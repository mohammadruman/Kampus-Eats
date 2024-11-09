import React from 'react'
import CartTile from './CartTile'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../feature/cart/cartSlice'

const Cart = () => {
  const cart = useSelector(selectAllCart)
  function tileList(){
    const restrauntList = cart.restrauntList
    return restrauntList.map( restraunt => {
       return <CartTile resName={restraunt.resName} />
    } )
  }
  return (
    <div>
      {
        tileList()
      }
      <h3>Total Quantity: {cart.totalQuantity}</h3>
      <h3>Total Price: {cart.totalPrice}</h3>
    </div>
  )
}

export default Cart