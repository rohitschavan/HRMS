import { JobDB } from "../models/Jobmodel.js";

export const getAllJobs = async (req, res) => {
    try {
        const alljobs = await JobDB.find({});
        if (!alljobs) {
            return res.json({ err: "No Jobs!" })
        }
        res.json({ data: alljobs })

    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err })
    }

}


export const addNewJob = async (req, res) => {
    try {
        const { title, department, location, description, jobType, experience, salary, opening, postedBy, status, deadline } = req.body
        if (!title, !postedBy, !jobType) {
            return res.json({ err: 'Please Fill up all the fields' });

        }

        const newJob = new JobDB({ title, department, location, description, jobType, experience, salary, opening, postedBy, status, deadline });
        await newJob.save();
        res.json({ ok: true, newJob })


    } catch (err) {
        console.log(err);
        return res.status(500).json({ err })
    }
}


export const deleteJob = async (req, res) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            return res.json({ err: 'No ID Provided' });
        }

        const isExisting = await JobDB.findById(_id);
        if (!isExisting) {
            return res.json({ err: 'Invalid ID' })
        }

        const deletedJob = await JobDB.findByIdAndDelete(_id);

        res.json({ ok: true, deletedJob })

    } catch (err) {
        console.log(err);
        res.status(500).json({ err })
    }
}


export const updateJob = async (req, res) => {
    try {
        const {
            _id,
            title,
            department,
            location,
            description,
            jobType,
            experience,
            salary,
            opening, // fixed
            postedBy,
            status,
            deadline
        } = req.body;

        if (!_id) {
            return res.status(400).json({ err: 'Failed to update, invalid ID' });
        }

        const updatedJob = await JobDB.findByIdAndUpdate(
            _id,
            {
                title,
                department,
                location,
                description,
                jobType,
                experience,
                salary,
                opening,
                postedBy,
                status,
                deadline
            },
            { new: true } // return the updated document
        );

        if (!updatedJob) {
            return res.status(404).json({ err: 'Job not found' });
        }

        res.status(200).json({ ok: true, updatedJob });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ err: 'Server error while updating job' });
    }
};
