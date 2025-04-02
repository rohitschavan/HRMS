import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Register from './components/Login/Register';
import RegisterHR from './components/Register/RegisterHR';
import RegisterEmployee from './components/Register/RegisterEmployee';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Toaster />

      <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hr/register" element={<RegisterHR />} />
            <Route path="/employee/register" element={<RegisterEmployee />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
     
    </Router>
  );
}

export default App;
