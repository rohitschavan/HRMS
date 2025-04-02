import { HRDB } from "../models/HRModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export const registerHR = async(req,res)=>{
    try{
        const{name,email,mobile,role,status,password} = req.body;
        if(!email,!name,!mobile,!role){
            return res.json({err:"Please fill up all fields"})
        }

        const isExisting = await HRDB.findOne({email});

        if(isExisting){
            return res.json({err:'User Already Exists'});
        }

        const hashedPass = await bcrypt.hash(password,10);

        const newHR = new HRDB({
            email,name,mobile,password:hashedPass,status,role
        });

        await newHR.save();

        res.json({ok:true,newHR})

    }catch(err){
        console.log(err);
    }
}


export const HRLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email,!password){
            return res.json({err:'No Email or Password Provided!'})
        }

        const user = await HRDB.findOne({email});

        if(!user){
            return res.json({err:'No User Found!'})
        }

        const isMatched = await bcrypt.compare(password,user.password);
        if(!isMatched){
            return res.json({err:"Invalid Password"})
        }

        const token = jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.status(200).json({token});

    }catch(err){
        console.log(err);
    }
}