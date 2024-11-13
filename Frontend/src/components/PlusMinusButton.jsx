import React from "react";
import { incItemQuantity, decFromCart } from "../feature/cart/cartSlice";
import { useDispatch } from "react-redux";

// Component is use to increase and decrease items in cart
  export default function PlusMinusButton( { resId, itemId, quantity } ){
    const dispatch = useDispatch()

    //increase item quantity by one
    function handleincItemQuantity(e,itemId){
      e.preventDefault()
      dispatch(incItemQuantity({resId, itemId}))
    }

    //handle remove from cart
    function handleRemoveFromCart(e, itemId){
      e.preventDefault()
      dispatch(decFromCart({resId, itemId}))
    }
    return (
      <div className="flex items-center gap-4">
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            onClick={e => handleincItemQuantity(e, itemId)}
          >
            +
          </button>
            <h3>{quantity}</h3>
          <button 
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            onClick={e => handleRemoveFromCart(e, itemId)}
          >
            -
          </button>
      </div>
    );
  };