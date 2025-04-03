import express from 'express';
import { registerEmployee,loginEmployee,getAllEmployees,deleteEmployee,updateEmployee } from '../controllers/Employee.js';

const employeeRouter = express.Router();


employeeRouter.post('/employee/register',registerEmployee);
employeeRouter.post('/employee/login',loginEmployee);
employeeRouter.get('/employee',getAllEmployees);
employeeRouter.put('/employee/update',updateEmployee);
employeeRouter.delete('/employee/delete/',deleteEmployee);


export default employeeRouter;