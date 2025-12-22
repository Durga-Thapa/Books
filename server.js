import express from 'express'
import mongoose from 'mongoose'
import connectDB from './config/connectDB.js';
import dotenv from 'dotenv'

dotenv.config();
const app=express();
const port=process.env.PORT || 3000
connectDB()

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})