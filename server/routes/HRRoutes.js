import express from 'express';
import { registerHR,HRLogin,getAllHR, updateHR, deleteHR } from '../controllers/HRcontroller.js';

const Hrrouter = express.Router();


Hrrouter.post('/hr/register',registerHR);

Hrrouter.post('/hr/login',HRLogin);
Hrrouter.get('/hr/',getAllHR);
Hrrouter.put('/hr/update',updateHR);
Hrrouter.delete('/hr/delete/',deleteHR);

export default Hrrouter;