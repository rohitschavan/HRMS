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
import { Link } from 'react-router-dom';

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

export default function ManageJob() {
  const [emp, setAllEmp] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    getAllEmp();
  }, []);

  const getAllEmp = async () => {
    try {
      const { data } = await axios.get("http://localhost:9000/jobs");
      if (data?.err) {
        toast.error(data.err);
      } else {
        setAllEmp(data);
        console.log(data);
      }
    } catch (error) {
      toast.error("Failed to fetch employees.");
    }
  };

  const handleDelete = async (row) => {
    if (!window.confirm(`Delete ${row.title}?`)) return;
    try {
      await axios.delete("http://localhost:9000/jobs/delete/", {
        data: { _id: row._id }
      });
      toast.success(`Deleted ${row.title}`)
      getAllEmp();
    } catch {
      toast.error("Failed to delete employee.");
    }
  };

  const handleUpdateClick = (row) => {
    setSelectedJob(row);
    setOpen(true);
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put("http://localhost:9000/jobs/update", selectedJob);
      toast.success("Employee updated successfully!");
      getAllEmp();
      setOpen(false);
   
    } catch {
      toast.error("Failed to update employee.");
    }
  };

  const handleChange = (e) => {
    setSelectedJob({ ...selectedJob, [e.target.name]: e.target.value });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'department', headerName: 'Department', width: 160 },
    { field: 'location', headerName: 'Location', width: 120 },
    { field: 'description', headerName: 'Description', width: 120 },
    { field: 'jobType', headerName: 'Job Type', width: 120 },
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
        title: item.title || "N/A",
        department: item.department || "N/A",
        location: item.location || "N/A",
        description: item.description || "N/A",
        jobType: item.jobType ,
      })) || []} columns={columns} pageSizeOptions={[5, 10]} />

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <h2>Edit Job</h2>
          <TextField label="First Name" name="title" value={selectedJob?.title || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Email" name="description" value={selectedJob?.description || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Mobile" name="department" value={selectedJob?.department || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Role" name="location" value={selectedJob?.location || ''} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Job Type" name="jobType" value={selectedJob?.jobType || ''} onChange={handleChange} fullWidth margin="normal" />
          <Button variant="contained" color="primary" onClick={handleUpdateSubmit} sx={{ mt: 2 }}>Save</Button>
        </Box>
      </Modal>
    </Paper>
  );
}
