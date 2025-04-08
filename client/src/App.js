import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Login from './components/Login/Login';
import Register from './components/Login/Register';
import RegisterHR from './components/Register/RegisterHR';
import RegisterEmployee from './components/Register/RegisterEmployee';
import AdminLayout from './components/Layouts/AdminLayout';
import Dashboard from './components/Dashboard/Dashboard';
import ManageEmp from './components/Manage/MangageEmp';
import ManageHR from './components/Manage/ManageHR';
import ManageJob from './components/Jobs/ManageJob';
import CreateNewJob from './components/Jobs/CreateNewJob';
import { AdminProvider } from './context/AdminContext';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <AdminProvider>
      <Router>
        <Toaster />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login role="admin" />} />
          <Route path="/login/hr" element={<Login role="hr" />} />
          <Route path="/login/employee" element={<Login role="employee" />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route path="/hr/register" element={<RegisterHR />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/employee/register" element={<RegisterEmployee />} />
            <Route path="/manage/employee" element={<ManageEmp />} />
            <Route path="/manage/hr" element={<ManageHR />} />
            <Route path="/manage/jobs" element={<ManageJob />} />
            <Route path="/jobs/create" element={<CreateNewJob />} />
          </Route>

        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default App;
