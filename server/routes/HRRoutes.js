import express from 'express';
import { registerHR,HRLogin } from '../controllers/HRcontroller.js';

const Hrrouter = express.Router();


Hrrouter.post('/hr/register',registerHR);

Hrrouter.post('/hr/login',HRLogin);

export default Hrrouter;