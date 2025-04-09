// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const HRToken = localStorage.getItem('HRtoken');

  if (!token && !HRToken) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
