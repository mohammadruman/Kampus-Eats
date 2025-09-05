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
			<section className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-100 py-10 px-2 sm:px-6 lg:px-12">
				<div className="max-w-3xl mx-auto">
					<div className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-8 text-center drop-shadow-sm">Order Summary</div>
					<div className="flex flex-col items-center gap-6">
						{tileList()}
						<div className="w-full max-w-lg mt-4 px-6 py-6 bg-white/90 border border-orange-100 rounded-2xl shadow-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6">
							<div>
								<h3 className="text-lg font-semibold text-orange-500 mb-1">
									Total Quantity: <span className="text-pink-500 font-bold">{cart.totalQuantity}</span>
								</h3>
								<h3 className="text-lg font-semibold text-orange-500">
									Total Price: <span className="text-green-500 font-bold">₹{cart.totalPrice}</span>
								</h3>
							</div>
							<button
								className="px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-bold rounded-full shadow hover:scale-105 hover:from-orange-500 hover:to-pink-500 transition-all duration-200"
								onClick={makepayment}
							>
								Order Now
							</button>
						</div>
					</div>
				</div>
			</section>
		)
}

export default Cart
