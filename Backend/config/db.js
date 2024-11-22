import mongoose from "mongoose";
const MONGO_URI = 'mongodb+srv://pratishtharichu:MongoDBpswd@cluster0.p4tro.mongodb.net/Payment?retryWrites=true&w=majority&appName=Cluster0';

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

export default connectDB;