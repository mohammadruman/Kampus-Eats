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
          className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xl font-bold rounded-full shadow hover:scale-110 hover:from-orange-500 hover:to-pink-500 transition-all duration-200"
          onClick={e => handleincItemQuantity(e, itemId)}
          aria-label="Increase quantity"
        >
          +
        </button>
        <span className="text-lg font-bold text-orange-500 bg-white/80 px-4 py-2 rounded-full border border-orange-100 shadow-sm">
          {quantity}
        </span>
        <button
          className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-orange-400 to-pink-400 text-white text-xl font-bold rounded-full shadow hover:scale-110 hover:from-orange-500 hover:to-pink-500 transition-all duration-200"
          onClick={e => handleRemoveFromCart(e, itemId)}
          aria-label="Decrease quantity"
        >
          -
        </button>
      </div>
    );
  };