import CandidatesDB from "../models/Candidates.js";

export const createNewCandidate = async(req,res)=>{
    try{
        const {name,mobile,email,jobId,resumeLink} = req.body;

        if(!email || !mobile){
            return res.json({err:'No Email or Mobile Provided!'})
        }

        const isExisting = await CandidatesDB.findOne({email});

        if(isExisting){
            return res.json({err:'You are Already Registered'})
        }



        const newCandidate =  new CandidatesDB({
            name,email,mobile,jobId,resumeLink
        })

        await newCandidate.save();

        res.json({ok:true,newCandidate})

    }catch(err){
        console.log(err)
    }
}


export const getAllCandidates = async(req,res)=>{
    try{
        const allCandidates = await CandidatesDB.find({});
        res.json({allCandidates});

    }catch(err){
        console.log(err);
    }
}
