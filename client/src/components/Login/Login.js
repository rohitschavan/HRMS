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
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo.svg'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const {data} = await axios.post('http://localhost:9000/admin/login',{email,password});
      if(data?.err){
        toast.error(data?.err);
      }

      if(data?.token){
        toast.success('Login Success');
        navigate('/dashboard')
      }


    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ lg: 6, sm: 12, md: 6, xs: 12 }}>
          <Box
            sx={{
              height: "100vh",
              backgroundColor:'#fcf4ed' ,
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
                  gap:'20px'
                }}
              >
               <Box sx={{
                width:'200px'
               }} src={Logo} component='img'>

               </Box>
                <Typography
                  className="poppins-thin"
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "27px",
                    color: "#201f1f",
                    position:'relative',
                    top:'10px'
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
              initial={{ opacity: 0, scale:0.9  }}
              animate={{ opacity: 1, scale:1}}
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
                Hello Again!
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
                Welcome Back
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
                <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>

             
              <TextField onChange={(e)=>setEmail(e.target.value)}
                sx={{
                  background: "#FFFFFF",
                  width: "307px",
                  height: "60px",
                }}
                placeholder="Email Address"
              ></TextField>
              <TextField onChange={(e)=>setPassword(e.target.value)}
                sx={{
                  background: "#FFFFFF",

                  width: "307px",
                  height: "60px",
                }}
                placeholder="Password"
              ></TextField>
              <Button type="submit"
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
              </form>
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
                <Link to='/register'>Register</Link>
              </Box>
            </Box>
              </motion.div>
          </Box>

          
        </Grid>
      </Grid>
    </>
  );
};

const box = {};
export default Login;
