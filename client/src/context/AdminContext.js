// src/context/AdminContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
const AdminContext = createContext();

// Provider component
export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current admin
  const fetchCurrentAdmin = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return setLoading(false);

      const { data } = await axios.get("http://localhost:9000/admin/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      

      if (data?.data) {
      
        setAdmin(data.data);
      }
    } catch (err) {
      console.error("Fetch Admin Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
};

// Custom hook
export const useAdmin = () => useContext(AdminContext);
