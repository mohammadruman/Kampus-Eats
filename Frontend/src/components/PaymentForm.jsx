import { useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

const PAYMENT_SUCESS_URL = 'http://localhost:3000/success'

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


		const res = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: PAYMENT_SUCESS_URL,
			},
		})

		if (res.error) {
			setError(res.error.message)
		}

		setProcessing(false)
	}

	return (
		<>
			<div className="p-6 flex flex-col items-center">
				<h2 className="font-bold pb-5 ">Use these sample card details.</h2>
				<table className="table-fixed w-[30%] flex flex-col gap-2">
					<tr className="flex justify-between">
						<td>Card Number</td>
						<td>4242 4242 4242 4242</td>
					</tr>
					<tr className="flex justify-between">
						<td>Expiration Date</td>
						<td>10/32</td>
					</tr>
					<tr className="flex justify-between">
						<td>Security code:</td>
						<td>567</td>
					</tr>
				</table>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="flex justify-center">
					<div className="p-8 m-2 w-[60%] ">
						<PaymentElement />
					</div>
				</div>
				{error && <div className="text-red-500">{error}</div>}
				<button
					type="submit"
					disabled={!stripe || processing}
					className="mt-4 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300">
					{processing ? 'Processing...' : 'Pay Now'}
				</button>
			</form>
		</>
	)
}
