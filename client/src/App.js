import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Login/Register';
import RegisterHR from './components/Register/RegisterHR';
import RegisterEmployee from './components/Register/RegisterEmployee';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import ManageEmp from './components/Manage/MangageEmp';
import ManageHR from './components/Manage/ManageHR';


function App() {
  return (
    <Router>
      <Toaster />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
        <Route path="/hr/register" element={<RegisterHR />} />
        <Route path='/admin/dashboard' element={<Dashboard/>}></Route>
        <Route path="/employee/register" element={<RegisterEmployee />} />
        <Route path="/manage/employee" element={<ManageEmp />} />
        <Route path="/manage/hr" element={<ManageHR />} />
        </Route>


     
      </Routes>

    </Router>
  );
}

export default App;
