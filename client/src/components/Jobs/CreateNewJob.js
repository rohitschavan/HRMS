import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useAdmin } from "../../context/AdminContext";
const CreateNewJob = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [opening, setOpening] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");
  //hooks


    
const {admin} = useAdmin();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:9000/jobs/new", {
        title,
        description,
        jobType,
        department,
        location,
        experience,
        salary,
        opening,
        postedBy:admin?._id,
        status,
        deadline,
      });

      if (data?.err) toast.error(data.err);
      if (data?.ok) toast.success("Job Posted!");
      console.log(data);
    } catch (err) {
      console.log("Err", err);
    }
  };

  const inputStyle = {
    background: "#FFFFFF",
    width: "307px",
    height: "60px",
    marginBottom: "10px",
    "& .MuiInputBase-root": {
      height: "60px",
      boxSizing: "border-box",
    },
    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      height: "60px",
    },
  };

  return (
    <>
      <Grid container spacing={2}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: '100%',
            marginTop:'-20px'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
                top: "-40px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins'",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "39px",
                  color: "#333333",
                }}
              >
                Create
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins'",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "#333333",
                }}
              >
                New Job
              </Typography>
            </Box>
            </motion.div>
            <br />

            <Grid sx={{
              display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '20px',
              marginTop:'-20px'
            }}
              size={{ lg: 12, sm: 12, md: 12, xs: 12 }}
            >

              {/* Left Side Inputs */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  top: "-40px",

                }}
              >
                <TextField
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter Title"
                  sx={inputStyle}
                />
                <TextField
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter Description"
                  sx={inputStyle}
                />
              
                 <FormControl sx={inputStyle}>
                  <InputLabel id="role-select-label">Select Status</InputLabel>
                  <Select
                    labelId="role-select-label"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    label="Select Status"
                   >
                    <MenuItem value="Full-time">Full-Time</MenuItem>
                    <MenuItem value="Part-time">Part-time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                    <MenuItem value="Internship">Internship</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="On-site">On-site</MenuItem>

                  </Select>
                </FormControl>
                <TextField
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  placeholder="Enter Department"
                  sx={inputStyle}
                />
            
                <TextField
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter Location"
                  sx={inputStyle}
                />
                <TextField
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Enter Experience"
                  sx={inputStyle}
                />
              </Box>

              {/* Right Side Inputs */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  top: "-40px",

                }}
              >
                <FormControl sx={inputStyle}>
                  <InputLabel id="role-select-label">Select Status</InputLabel>
                  <Select
                    labelId="role-select-label"
                    value={salary}
                    onChange={(e) => setStatus(e.target.value)}
                    label="Select Status"
                   >
                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="Closed">Closed</MenuItem>

                  </Select>
                </FormControl>
                <TextField
                  value={opening}
                  onChange={(e) => setOpening(e.target.value)}
                  placeholder="No. of Openings"
                  sx={inputStyle}
                />
              <TextField
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Enter Salary"
                  sx={inputStyle}
                />

         
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Deadline"
                    value={deadline}
                    onChange={(newValue) => setDeadline(newValue)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        sx={{
                          background: "#FFFFFF",
                          width: "307px",
                          height: "60px",
                          marginBottom: "10px",
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Box>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-24px",
              }}
            >
              <Button
                type="submit"
                sx={{
                  width: "307px",
                  height: "60px",
                  backgroundColor:"rgb(251, 145, 0)",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    textTransform: "none",
                    fontWeight:'bold',
                    fontFamily:'Poppins',
                    fontSize: { lg: "14px", sm: "10px" },
                  }}
                >
                  Register
                </Typography>
              </Button>
            </Box>
  
        </form>
      </Grid>
    </>
  );
};

export default CreateNewJob;
