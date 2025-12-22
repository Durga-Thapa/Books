import mongoose from "mongoose";
import dotenv from 'dotenv'

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('MongoDB Connected')
    } catch (error) {
        console.error(`MongoDB failed ${error.message}`)
        process.exit(1)
    }
}

export default connectDB