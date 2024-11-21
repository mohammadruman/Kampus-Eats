//server.js
require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())

const calculateTotalOrderAmount = (items) => {
	return items[0].amount * 100
}

app.post('/create-payment-intent', async (req, res) => {
	const { name, amount } = req.body

	const paymentIntent = await stripe.paymentIntents.create({
		amount: amount,
		// mode: 'payment',
		currency: 'inr',
		description: 'Sample Payment',
		automatic_payment_methods: {
			enabled: true,
		},
		shipping: {
			address: {
				line1: '510 Townsend St',
				postal_code: '98140',
				city: 'San Francisco',
				state: 'CA',
				country: 'US',
			},
			name: name,
		},
	})

	res.send({
		clientSecret: paymentIntent.client_secret,
	})
})

app.listen(PORT, () => {
	console.log(`Server started on PORT ${PORT}`)
})
