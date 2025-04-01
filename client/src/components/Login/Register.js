import React, { useState } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import loginbg from "../../assets/loginbg.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
const Register = () => {

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ lg: 6, sm: 12, md: 6, xs: 12 }}>
          <Box
            sx={{
              height: "100vh",
              backgroundImage: `url(${loginbg})`,
              backgroundPosition: "50% 50%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                top: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  position: "relative",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  className="poppins-medium"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: { lg: "40px", sm: "20px" },
                    lineHeight: "60px",
                    color: "#FFFFFF",
                  }}
                >
                  WorkGlow HRMS
                </Typography>
                <Typography
                  className="poppins-thin"
                  sx={{
                    fontWeight: 500,
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#FFFFFF",
                  }}
                >
                  Streamline Your HR Processes
                </Typography>

                <Button
                  sx={{
                    width: "135px",
                    height: "37px",
                    background: "#0575E6",

                    flex: "none",
                    order: 1,
                    flexGrow: 0,
                    marginTop: "23px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      textTransform: "none",
                      fontSize: { lg: "14px", sm: "10px" },
                    }}
                  >
                    Read More
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ lg: 6, sm: 12, md: 6, xs: 12 }}>
         
            <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
           >
               <motion.div
              initial={{ opacity: 0,scale:0.9 }}
              animate={{ opacity: 1,scale:1 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            
            >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
           
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Poppins'",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "39px",
                  color: "#333333",
                }}
              >
                Register Page
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Poppins'",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "#333333",
                }}
              >
              For Admin
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                top: "23px",
              }}
            >
              <TextField
                sx={{
                  background: "#FFFFFF",
                  width: "307px",
                  height: "60px",
                }}
                placeholder="Email Address"
              ></TextField>
              <TextField
                sx={{
                  background: "#FFFFFF",

                  width: "307px",
                  height: "60px",
                }}
                placeholder="Password"
              ></TextField>
              <TextField
                sx={{
                  background: "#FFFFFF",

                  width: "307px",
                  height: "60px",
                }}
                placeholder="Role"
              ></TextField>
              <TextField
                sx={{
                  background: "#FFFFFF",

                  width: "307px",
                  height: "60px",
                }}
                placeholder="Hobby"
              ></TextField>
              
              <Button
                sx={{
                  width: "307px",
                  height: "57px",

                  background: "#0575E6",
                  borderRadius: "8px",
                  top: "14px",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    textTransform: "none",
                    fontSize: { lg: "14px", sm: "10px" },
                  }}
                >
                  Login
                </Typography>
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  position: "relative",
                  top: "30px",
                  gap: "0px",

                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Link style={{}}>Forgot Password</Link>
                <Link to='/'> Back to Login</Link>
              </Box>
            </Box>
              </motion.div>
          </Box>
          
        </Grid>
      </Grid>
    </>
  );
};


export default Register;
