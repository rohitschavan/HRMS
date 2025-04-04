import React, { useState } from "react";
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

const CreateNewJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [jobType, setJobType] = useState("");
  const [department, setDepartment] = useState("Admin");
  const [location, setLocation] = useState("Admin");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [opening, setOpening] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [status, setStatus] = useState("");
  const [deadline, setDeadline] = useState("");

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
        postedBy,
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
            <br />

            <Grid
              sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
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
                <TextField
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  placeholder="Enter Job Type"
                  sx={inputStyle}
                />
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
                    onChange={(e) => setSalary(e.target.value)}
                    label="Select Status"
                  >
                    <MenuItem value="Dev">Open</MenuItem>
                    <MenuItem value="Manager">Closed</MenuItem>
                    
                  </Select>
                </FormControl>
                <TextField
                  value={opening}
                  onChange={(e) => setOpening(e.target.value)}
                  placeholder="No. of Openings"
                  sx={inputStyle}
                />
                <TextField
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="Status"
                  sx={inputStyle}
                />
                <TextField
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  placeholder="Deadline"
                  sx={inputStyle}
                />
                <TextField
                  value={postedBy}
                  onChange={(e) => setPostedBy(e.target.value)}
                  placeholder="Posted By"
                  sx={inputStyle}
                />
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
                  background: "#0575E6",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "none",
                    
                    fontSize: { lg: "14px", sm: "10px" },
                  }}
                >
                  Register
                </Typography>
              </Button>
            </Box>
          </motion.div>
        </form>
      </Grid>
    </>
  );
};

export default CreateNewJob;
