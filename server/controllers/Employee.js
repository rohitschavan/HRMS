import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { EmployeeDB } from '../models/EmployeeModel.js';



export const registerEmployee = async(req,res)=>{
    try{
        const{name,email,password,mobile,role,status} = req.body;

        if(!name || !email || !password || !role){
            return res.json({err:"Please fill up all the fields"})

        }

        const isExisting  = await EmployeeDB.findOne({email});

        if(isExisting){
            return res.json({err:'User Already Found'});
        }

        const hashedPass = await bcrypt.hash(password,10);

        const newUser = new EmployeeDB({
            name,email,password:hashedPass,mobile,role,status
        })

        await newUser.save();

        return res.json({ok:true,newUser});

    }catch(err){
        console.log(err);
    }
}


export const loginEmployee = async(req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.json({err:'Please fill all fields'});
        }

        const user = await EmployeeDB.findOne({email});

        if(!user){
            return res.json({err:"No user found"})
        }

        const isMatched = await bcrypt.compare(password,user.password);

        if(!isMatched){
            return res.json({err:'Wrong Password!'})
        }

        const token = jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.json({token})

    }catch(err){
        console.log(err)
    }
}


export const getAllEmployees = async(req,res)=>{
    try{
        
        const allEmp = await EmployeeDB.find({});

        res.status(200).json({ success: true, data: allEmp });
    }catch(err){
        console.log(err);
    }
}


export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ err: "Employee ID is required!" });
        }

        const deletedEmp = await EmployeeDB.findByIdAndDelete(id);

        if (!deletedEmp) {
            return res.status(404).json({ err: "No Matching Employee Found!" });
        }

        res.json({ ok: true, deletedEmp });

    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Internal Server Error" });
    }
};


export const updateEmployee = async (req, res) => {
    try {
        const { _id, email, status, mobile, role,name } = req.body;

        if (!_id) {
            return res.status(400).json({ err: "Employee ID is required!" });
        }


        const updateEmp = await EmployeeDB.findByIdAndUpdate(
            _id, 
            { email, name,  status: status === 'Active', mobile, role },
            { new: true }
        );

        if (!updateEmp) {
            return res.status(404).json({ err: "No Employee Found!" });
        }

        res.json({ ok: true, updateEmp });

    } catch (err) {
        console.error(err);
        res.status(500).json({ err: "Internal Server Error" });
    }
};
