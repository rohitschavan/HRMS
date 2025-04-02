import mongoose from "mongoose";


const employeeSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    mobile:{type:String},
    password:{type:String},
    role:{type:String,
        enum:["Dev","Manager","TeamLead"],
        default:"Dev"
    },
    status:{type:Boolean,default:true},

},{timestamps:true})


export const EmployeeDB = mongoose.model('Employee',employeeSchema)