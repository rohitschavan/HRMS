import mongoose from "mongoose";


const HRSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    mobile:{type:String},
    password:{type:String},
    role:{type:String,
        enum:["Senior","Junior","Lead"],
        default:"Junior"
    },
    status:{type:Boolean,default:true}
},{timestamps:true})


export const HRDB = mongoose.model("HR",HRSchema);