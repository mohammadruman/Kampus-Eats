import Stripe from 'stripe'

const stripe = new Stripe(
	'sk_test_51P9M6fSG75cgTzAoH9wndoVN0XVMmXNXTrzOdyVwpGNiQUX6T1OKuH0kdD0ID3rwBhIk2n2NOZbqBuIDXCucbp6O00JGydyKHV'
)

export default async ({ req, res, log, error }) => {
	// const corsHeaders = {
	// 	'Access-Control-Allow-Origin': 'http://localhost:3000',
	// 	'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
	// 	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
	// }
	if (req.method === 'OPTIONS' || req.method === 'GET') {
		return res.send('', 200, {
			'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		})
	}

	if (req.method === 'POST') {
		try {
			const { amount, currency = 'inr' } = JSON.parse(req.body)

			const paymentIntent = await stripe.paymentIntents.create({
				amount: Math.round(amount * 100), // Convert to paise/cents
				currency,
				payment_method_types: ['card'],
			})

			console.log('paymentIntent', paymentIntent)

			return res.json({ clientSecret: paymentIntent.client_secret }, 200, {
				'Access-Control-Allow-Origin': 'http://localhost:3000',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			})
		} catch (error) {
			return res.json({ error: error.message }, 500, {
				'Access-Control-Allow-Origin': 'http://localhost:3000',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			})
		}
	}

	return res.json('hello ')
}
