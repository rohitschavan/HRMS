import mongoose from "mongoose";


const JobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
        
    },
    department:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    description:{
        type:String,
    },
    jobType:{
        type:String,
        enum:['Full-time','Part-time','Contract','Internship','Remote','On-site']
    },
    experience:{
        type:String,
    },
    salary:{
        type:Number
    },
    opening:{
        type:String
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'HRModel',
    },
    status:{
        type:String,
        enum:['Open','Closed'],
        default:'Open'
    },
    deadline:{
        type:Date
    },

},{timestamps:true});


export const JobDB = mongoose.model('Jobs',JobSchema);