import express from 'express'
import { createNewCandidate, getAllCandidates } from '../controllers/Candidates.js';


const CandidatesRouter = express.Router();


CandidatesRouter.get('/candidate',getAllCandidates);

CandidatesRouter.post('/candidate/new',createNewCandidate);


export default CandidatesRouter;