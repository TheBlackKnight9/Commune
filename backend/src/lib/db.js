import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config(); // load .env before using process.env


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
        }
}    