import express from 'express';
import { adminLogin, registerAdmin,getCurrentAdmin } from '../controllers/Auth.js';
import { verifyToken } from '../middlewares/AuthMiddleware.js';

const Authrouter = express.Router();




Authrouter.post('/admin/register',registerAdmin);
Authrouter.post('/admin/login',adminLogin);
Authrouter.get('/admin/current',verifyToken,getCurrentAdmin);


export default Authrouter;