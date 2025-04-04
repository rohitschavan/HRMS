import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ManageEmp() {
  const [emp, setAllEmp] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedEmp, setSelectedEmp] = useState(null);

  useEffect(() => {
    getAllEmp();
  }, []);

  const getAllEmp = async () => {
    try {
      const { data } = await axios.get("http://localhost:9000/employee");
      if (data?.err) {
        toast.error(data.err);
      } else {
        setAllEmp(data);
      }
    } catch (error) {
      toast.error("Failed to fetch employees.");
    }
  };

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete ${row.firstName}?`)) return;
    try {
      await axios.delete("http://localhost:9000/employee/delete/", {
        data: { id: row._id }
      });
      toast.success(`Deleted ${row.firstName}`)
      getAllEmp();
    } catch {
      toast.error("Failed to delete employee.");
    }
  };

  const handleUpdateClick = (row) => {
    setSelectedEmp(row);
    setOpen(true);
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put("http://localhost:9000/employee/update", selectedEmp);
      toast.success("Employee updated successfully!");
      getAllEmp();
      setOpen(false);
   
    } catch {
      toast.error("Failed to update employee.");
    }
  };

  const handleChange = (e) => {
    setSelectedEmp({ ...selectedEmp, [e.target.name]: e.target.value });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'First Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 160 },
    { field: 'mobile', headerName: 'Mobile', width: 120 },
    { field: 'role', headerName: 'Role', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <Button variant="contained" color="error" size="small" onClick={() => handleDelete(params.row)}>
          Delete
        </Button>
      ),
    },
    {
      field: 'update',
      headerName: 'Update',
      width: 100,
      renderCell: (params) => (
        <Button variant="contained" color="primary" size="small" onClick={() => handleUpdateClick(params.row)}>
          Update
        </Button>
      ),
    },
  ];

  return (
    <Paper sx={{ height: 450, width: '100%', p: 2 }}>
      
      <DataGrid rows={emp.data?.map((item, index) => ({
        id: index + 1,
        _id: item._id,
        name: item.name || "N/A",
        email: item.email || "N/A",
        mobile: item.mobile || "N/A",
        role: item.role || "N/A",
        status: item.status ? "Active" : "Inactive",
      })) || []} columns={columns} pageSizeOptions={[5, 10]} />

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <h2>Edit Employee</h2>
          <TextField label="First Name" name="name" value={selectedEmp?.name || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Email" name="email" value={selectedEmp?.email || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Mobile" name="mobile" value={selectedEmp?.mobile || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Role" name="role" value={selectedEmp?.role || ''} onChange={handleChange} fullWidth margin="normal" />
          <Button variant="contained" color="primary" onClick={handleUpdateSubmit} sx={{ mt: 2 }}>Save</Button>
        </Box>
      </Modal>
    </Paper>
  );
}
