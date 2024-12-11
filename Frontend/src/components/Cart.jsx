import { React, useState } from 'react'
import CartTile from './CartTile'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../feature/cart/cartSlice'
import { useNavigate } from 'react-router-dom'



const Cart = () => {
	const cart = useSelector(selectAllCart)
	const navigate = useNavigate()

	function tileList() {
		const restrauntList = cart.restrauntList
		return restrauntList.map((restraunt) => {
			return <CartTile key={`${restraunt.resId}`} restraunt={restraunt} />
		})
	}

	const makepayment = async () => {
		navigate('/payment')
	}

	return (
		<div className="p-6">
			<div className="text-2xl font-semibold mb-3">Order Summary</div>
			<div className="flex items-center flex-col">
				{tileList()}
				<div className="flex items-center justify-between w-6/12 mt-4 px-4 py-2 bg-gray-100 rounded-lg shadow-md">
					<div>
						<h3 className="text-lg font-medium">
							Total Quantity:{' '}
							<span className="text-blue-600 font-bold">
								{cart.totalQuantity}
							</span>
						</h3>
						<h3 className="text-lg font-medium">
							Total Price:{' '}
							<span className="text-green-600 font-bold">
								₹{cart.totalPrice}
							</span>
						</h3>
					</div>
					<button
						className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-200 ease-in-out"
						onClick={makepayment}>
						Order Now
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
