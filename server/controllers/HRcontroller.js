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


export const getAllHR = async(req,res)=>{
    try{
        const allHr = await HRDB.find({});
        res.json({success:true,data:allHr});

    }catch(err){
        console.log(err);
    }
}

export const deleteHR = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ err: "HR ID is required!" });
        }

        const deletedHr = await HRDB.findByIdAndDelete(id);

        if (!deletedHr) {
            return res.status(404).json({ err: "No Matching HR Found!" });
        }

        res.json({ ok: true, deletedHr });

    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Internal Server Error" });
    }
};


export const updateHR = async (req, res) => {
    try {
        const {_id, name,email,mobile,role,status,} = req.body;

        if (!_id) {
            return res.status(400).json({ err: "HR ID is required!" });
        }


        const updateEmp = await HRDB.findByIdAndUpdate(
            _id, 
            { email,   status: status === 'Active', mobile, role,name },
            { new: true }
        );

        if (!updateEmp) {
            return res.status(404).json({ err: "No HR Found!" });
        }

        res.json({ ok: true, updateEmp });

    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Internal Server Error" });
    }
};