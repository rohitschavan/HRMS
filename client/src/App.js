import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <Router>
        <Toaster/>
      <Routes>
    
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
