import mongoose from 'mongoose'

const PaymentSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	clientsecret: {
		type: String,
		required: true,
	},
	orderid: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

export default mongoose.model('Payment', PaymentSchema)
