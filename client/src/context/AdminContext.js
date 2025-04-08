// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null); // works for admin/hr/employee
  const [loading, setLoading] = useState(true);

  // Determine the role and API endpoint
  const getAuthDetails = () => {
    if (localStorage.getItem("token")) {
      return { role: "admin", token: localStorage.getItem("token"), endpoint: "http://localhost:9000/admin/current" };
    } else if (localStorage.getItem("HRtoken")) {
      return { role: "hr", token: localStorage.getItem("HRtoken"), endpoint: "http://localhost:9000/hr/current" };
    } else if (localStorage.getItem("EMPtoken")) {
      return { role: "employee", token: localStorage.getItem("EMPtoken"), endpoint: "http://localhost:9000/employee/current" };
    } else {
      return null;
    }
  };

  const fetchCurrentUser = async () => {
    try {
      const authDetails = getAuthDetails();
      if (!authDetails) return setLoading(false);

      const { token, endpoint, role } = authDetails;

      const { data } = await axios.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data?.data) {
        setAdmin({ ...data.data, role }); // Add role to user object
      }
    } catch (err) {
      console.error("Fetch User Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ admin, setAdmin, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAdmin = () => useContext(AuthContext);
