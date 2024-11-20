import React from 'react'
import CartTile from './CartTile'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../feature/cart/cartSlice'
import { loadStripe } from '@stripe/stripe-js'
import { useStripe } from '@stripe/react-stripe-js'
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from '@stripe/react-stripe-js'

const Cart = () => {
	const cart = useSelector(selectAllCart)

	function tileList() {
		const restrauntList = cart.restrauntList
		return restrauntList.map((restraunt) => {
			return <CartTile key={`${restraunt.resId}`} restraunt={restraunt} />
		})
	}

	let stripe = null
	let options = null

	const testAppwriteFunction = async () => {
		const result = await fetch(
			'https://673dcd3054a038fbb6b5.appwrite.global/',
			{ headers: { 'Content-Type': 'application/json' } }
		)
		console.log(result)
	}

	const makepayment = async () => {
		stripe = await loadStripe(
			'pk_test_51P9M6fSG75cgTzAowwJHSac0Eq5fQSPNg11Sb7XGF6qWiLtCjn5MeY705DXbGr2udA1KFEq1iN2aQzy0jzu0Mbsb00ywBojOXI'
		)

		console.log('stripeInit', stripe)

		// const fetchClientSecret = async () => {
		// 	const res = await fetch('https://673cdbf963a3a2ff50df.appwrite.global/create-checkout-session', {
		// 		headers: { 'Content-Type': 'application/json' },
		// 		method: 'POST',
		// 		body: { price: cart.totalPrice },
		// 	})
		// 	console.log(res)
		// }

		// const session = await fetchClientSecret.json()
		// options = { fetchClientSecret }
	}

	return (
		<div className="p-6">
			<div className="text-2xl font-semibold mb-3">Order Summary</div>
			<div id="checkout">
				<EmbeddedCheckoutProvider stripe={stripe}>
					<EmbeddedCheckout />
				</EmbeddedCheckoutProvider>
			</div>
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
						// onClick={() => alert("Proceeding to checkout...")}
						onClick={testAppwriteFunction}>
						Order Now
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
