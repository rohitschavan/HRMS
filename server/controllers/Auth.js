import { Authmodel } from "../models/AuthModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'


export const registerAdmin = async(req,res)=>{
    try{
        const {name,email,password,role,status} = req.body;
        if(!name || !email || !password || !role || !status){
            return res.json({err:'Please fill up all fields'});
        }

        const existingUser = await Authmodel.findOne({email});

        if(existingUser){
            return res.json({err:"User already Exists"})
        }

        const hashedPass = await bcrypt.hash(password,10);
        const newUser = new Authmodel({
            name,email,password:hashedPass,role,status
        });

        await newUser.save();

        res.status(201).json({ok:true,user:newUser})


    }catch(err){
        console.log(err);
    }
}



export const adminLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(401).json({err:"No Email or Password Provided"})
        }

        const user = await Authmodel.findOne({email});
        if(!user){
            return res.status(403).json({err:'No User found!'})
        }
        const isMatched = await bcrypt.compare(password,user.password);

        if(!isMatched){
            return res.status(401).json({err:'Invalid Email or Password'})
        }

       const token = await jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1h'});
       res.status(200).json({token})


    }catch(err){
        console.log(err);
    }
}

