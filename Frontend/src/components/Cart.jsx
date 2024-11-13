import React from 'react';
import CartTile from './CartTile';
import { useSelector } from 'react-redux';
import { selectAllCart } from '../feature/cart/cartSlice';

const Cart = () => {
  const cart = useSelector(selectAllCart);

  function tileList() {
    const restrauntList = cart.restrauntList;
    return restrauntList.map(restraunt => {
      return <CartTile key={`${restraunt.resId}`} restraunt={restraunt} />;
    });
  }

  return (
    <div>
      <div>Cart</div>
      <div className="flex items-center flex-col">
        {tileList()}
        <h3>Total Quantity: {cart.totalQuantity}</h3>
        <h3>Total Price: {cart.totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
