import express from 'express';
import { adminLogin, registerAdmin } from '../controllers/Auth.js';

const Authrouter = express.Router();




Authrouter.post('/admin/register',registerAdmin);
Authrouter.post('/admin/login',adminLogin);


export default Authrouter;