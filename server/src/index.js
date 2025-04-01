import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../db.js';
import Authrouter from '../routes/AuthRoutes.js';
const port = process.env.PORT;
connectDB();

const app =express();
app.use(express.json());
app.use('/',Authrouter);
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is Running ${port}`)
})