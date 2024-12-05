import mongoose from "mongoose";
const MONGO_URI = 'mongodb+srv://mohammaderuman:foWYRU8fVoZw5Hbj@cluster0.jwg27.mongodb.net/paymentdb?retryWrites=true&w=majority';

mongoose.set("debug", true);

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error.message);
		process.exit(1);
	}
};


export default connectDB;