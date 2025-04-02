import express from 'express';
import { registerEmployee,loginEmployee } from '../controllers/Employee.js';

const employeeRouter = express.Router();


employeeRouter.post('/employee/register',registerEmployee);

employeeRouter.post('/employee/login',loginEmployee);


export default employeeRouter;