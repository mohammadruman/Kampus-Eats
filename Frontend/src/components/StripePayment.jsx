import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import axios from 'axios'
import PaymentForm from './PaymentForm'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../feature/cart/cartSlice'
import { useAuth } from '../utils/AuthContext'

const stripePromise = loadStripe(
	'pk_test_51P9M6fSG75cgTzAowwJHSac0Eq5fQSPNg11Sb7XGF6qWiLtCjn5MeY705DXbGr2udA1KFEq1iN2aQzy0jzu0Mbsb00ywBojOXI'
)

const StripePayment = () => {
	const cart = useSelector(selectAllCart)
	const [clientSecret, setClientSecret] = useState(null)
	const { user } = useAuth()

  console.log(user)

	useEffect(() => {
		async function backendCall() {
			const response = await axios.post(
				'http://localhost:4000/create-payment-intent',
				{
					name: user.name,
					// amount: cart.totalPrice * 100,
					amount: cart.totalPrice,
					email: user.email
				}
			)
			setClientSecret(response.data.clientSecret)
		}

		backendCall()
	}, [cart.totalPrice, user.name])

	const options = {
		clientSecret,
		theme: 'stripe',
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
				<h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
					Complete Your Payment
				</h2>
				<p className="text-gray-600 text-center mb-6">
					Hello, <strong>{user.name}</strong>! You are about to pay for your
					order.
				</p>
				<h3 className="text-xl font-bold text-gray-700 text-center mb-6">
					Total Price:{' '}
					<span className="text-xl font-bold text-green-600">
						₹{cart.totalPrice.toFixed(2)}
					</span>
				</h3>
				{clientSecret ? (
					<Elements stripe={stripePromise} options={options}>
						<PaymentForm />
					</Elements>
				) : (
					<div className="flex items-center justify-center h-16">
						<p className="text-gray-500">Preparing your payment...</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default StripePayment
