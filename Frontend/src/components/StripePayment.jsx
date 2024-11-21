//StripePayment.js

import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import axios from 'axios'
import PaymentForm from './PaymentForm'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../feature/cart/cartSlice'
import { useAuth } from '../utils/AuthContext'

const stripePromise = loadStripe(
	process.env.STRIPE_PUBLISHABLE_KEY
)
const StripePayment = () => {
	const cart = useSelector(selectAllCart)
	const [clientSecret, setClientSecret] = useState(null)
	const { user } = useAuth()

	useEffect(() => {
		async function backendCall() {
			const response = await axios.post(
				'http://localhost:4000/create-payment-intent',
				{
					name: user.name,
					amount: cart.totalPrice * 100,
				}
			)
			console.log('stripe res: ', response)
			setClientSecret(response.data.clientSecret)
		}

		backendCall()
	}, [])

	const options = {
		clientSecret,
		theme: 'stripe',
	}

	return (
		clientSecret && (
			<Elements stripe={stripePromise} options={options}>
				<PaymentForm></PaymentForm>
			</Elements>
		)
	)
}

export default StripePayment
