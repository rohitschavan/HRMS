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
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import axios from "axios";
const UpdateEmployee = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('Admin');
    const [status, setStatus] = useState('Admin');
    const[mobile,setMobile] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put('http://localhost:9000/employee/', {
                name, email, password, role, status,mobile
            });
            if (data?.err) {
                toast.error(data.err);
            }

            if(data?.ok){
                toast.success('Registration Success!')
            }

    

        } catch (err) {
            console.log('Err', err);
        }
    }

    return (
        <>
            <Grid container spacing={2}>
                </Grid>
                <Grid sx={{
                    marginTop:'-100px'
                }} size={{ lg: 12, sm: 12, md: 12, xs: 12 }}>

                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            marginTop:'100px'
                            
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
                                    For Employee
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
                                <form style={{
                                    display:'flex',
                                    flexDirection:'column'
                                }} onSubmit={handleSubmit}>

                         
                                <TextField onChange={(e)=>setName(e.target.value)}
                                    sx={{
                                        background: "#FFFFFF",
                                        width: "307px",
                                        height: "60px",
                                    }}
                                    placeholder="Enter your Name"
                                ></TextField>
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
                                <TextField onChange={(e)=>setRole(e.target.value)}
                                    sx={{
                                        background: "#FFFFFF",

                                        width: "307px",
                                        height: "60px",
                                    }}
                                    placeholder="Role"
                                ></TextField>
                                <TextField onChange={(e)=>setStatus(e.target.value)}
                                    sx={{
                                        background: "#FFFFFF",

                                        width: "307px",
                                        height: "60px",
                                    }}
                                    placeholder="Status"
                                ></TextField>
                                <TextField onChange={(e)=>setMobile(e.target.value)}
                                    sx={{
                                        background: "#FFFFFF",

                                        width: "307px",
                                        height: "60px",
                                    }}
                                    placeholder="Mobile"
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
                                        Register
                                    </Typography>

                                </Button>
                           
                                
                                </form>
                         
                            </Box>
                        </motion.div>
                    </Box>

                </Grid>
    
        </>
    );
};


export default UpdateEmployee;
