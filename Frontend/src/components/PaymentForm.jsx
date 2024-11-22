import { useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'

const PAYMENT_SUCESS_URL = 'http://localhost:3000/success'

export default function PaymentForm({ amount }) {
	const stripe = useStripe()
	const elements = useElements()
	const [error, setError] = useState(null)
	const [processing, setProcessing] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false) // To control modal visibility

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

	// Toggle modal visibility
	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<>
			{/* Payment Form */}
			<form onSubmit={handleSubmit} className="p-4">
				<div className="text-center mb-4">
					<button
						type="button"
						onClick={toggleModal}
						className="text-blue-500 hover:text-blue-700 mt-2">
						See Card Details
					</button>
				</div>
				{/* Modal - Card Details */}
				{isModalOpen && (
					<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
						<div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
							<h4 className="text-xl font-semibold">Sample Card Details</h4>
							<table className="table-fixed w-full mt-4">
								<tr className="border-b py-2">
									<td className="font-medium">Card Number</td>
									<td>4242 4242 4242 4242</td>
								</tr>
								<tr className="border-b py-2">
									<td className="font-medium">Expiration Date</td>
									<td>10/32</td>
								</tr>
								<tr className="py-2">
									<td className="font-medium">Security Code</td>
									<td>567</td>
								</tr>
							</table>
							<button
								onClick={toggleModal}
								className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full">
								Close
							</button>
						</div>
					</div>
				)}
				{/* Stripe Payment Element */}
				<div className="flex justify-center">
					<div className="p-8 m-2 w-[60%]">
						<PaymentElement />
					</div>
				</div>
				{/* Error Display */}
				{error && <div className="text-red-500">{error}</div>}
				{/* Submit Button */}
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
