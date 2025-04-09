import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../db.js';
import Authrouter from '../routes/AuthRoutes.js';
import Hrrouter from '../routes/HRRoutes.js';
import employeeRouter from '../routes/EmployeeRoutes.js';
import jobsRouter from '../routes/JobRoutes.js';
import cors from 'cors';
import CandidatesRouter from '../routes/CandidateRoutes.js';
const port = process.env.PORT;

connectDB();

const app =express();
app.use(cors());
app.use(express.json());
app.use('/',Authrouter);
app.use('/',Hrrouter);
app.use('/',employeeRouter);
app.use('/',jobsRouter)
app.use('/',CandidatesRouter)
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is Running ${port}`)
})