//server.js
// import { connectDB } from './config/db'
import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import Stripe from 'stripe'
import Payment from './models/payment.js'

const stripe = new Stripe(
	'sk_test_51P9M6fSG75cgTzAoH9wndoVN0XVMmXNXTrzOdyVwpGNiQUX6T1OKuH0kdD0ID3rwBhIk2n2NOZbqBuIDXCucbp6O00JGydyKHV'
)


const app = express()
const PORT = process.env.PORT || 4000

const MONGO_URI =
	'mongodb+srv://mohammaderuman:foWYRU8fVoZw5Hbj@cluster0.jwg27.mongodb.net/paymentdb?retryWrites=true&w=majority'
const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI)
		console.log('MongoDB connected')
	} catch (error) {
		console.error('Error connecting to MongoDB:', error.message)
		process.exit(1)
	}
}

connectDB()
app.use(cors({
	origin: ['https://deploy-mern-1whq.vercel.app'], // Allow requests from this specific origin
	methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
	allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
	credentials: true, // Allow cookies and authentication headers to be sent
  }));
app.use(bodyParser.json())


app.post('/create-payment-intent', async (req, res) => {
	const { name, amount, email } = req.body

	const orderid = Math.floor(1000 + Math.random() * 9000)

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

	const clientsecret = paymentIntent.client_secret
	// Save payment details to MongoDB
	const pay = new Payment({
		email,
		name,
		amount,
		clientsecret,
		orderid,
	})
	await pay.save()

	console.log('pay:', pay)

	res.send({
		clientSecret: paymentIntent.client_secret,
	})
})

mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB')
	app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
})
