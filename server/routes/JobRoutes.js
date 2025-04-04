import express from 'express'

import { getAllJobs,addNewJob,deleteJob,updateJob } from '../controllers/JobController.js';
const jobsRouter = express.Router();


jobsRouter.get('/jobs/',getAllJobs)
jobsRouter.post('/jobs/new',addNewJob)
jobsRouter.put('/jobs/update',updateJob)
jobsRouter.delete('/jobs/delete',deleteJob)


export default jobsRouter;