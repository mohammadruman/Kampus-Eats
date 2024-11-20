import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
	Elements,
	PaymentElement,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js'

export default function PaymentForm({ amount }) {
	const stripe = useStripe()
	const elements = useElements()
	const [error, setError] = useState(null)
	const [processing, setProcessing] = useState(false)

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!stripe || !elements) {
			return
		}

		setProcessing(true)

		const { error: submitError } = await elements.submit()
		if (submitError) {
			setError(submitError.message)
			setProcessing(false)
			return
		}

		// Create payment intent on your Appwrite function
		const response = await fetch(
			'https://673e2f926861654d92cb.appwrite.global/',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					amount: amount,
					currency: 'inr',
				}),
			}
		)

    console.log('response: ', response)

		const { clientSecret, error: paymentError } = await response.json()

		if (paymentError) {
			setError(paymentError)
			setProcessing(false)
			return
		}

		// Confirm the payment
		const { error: confirmError } = await stripe.confirmPayment({
			elements,
			clientSecret,
			confirmParams: {
				return_url: `${window.location.origin}/payment-success`,
			},
		})

		if (confirmError) {
			setError(confirmError.message)
		}

		setProcessing(false)
	}

	return (
		<form onSubmit={handleSubmit}>
			<PaymentElement />
			{error && <div className="text-red-500">{error}</div>}
			<button
				type="submit"
				disabled={!stripe || processing}
				className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300">
				{processing ? 'Processing...' : 'Pay Now'}
			</button>
		</form>
	)
}
