import React from "react";

import { Grid, Container, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useAdmin } from "../../context/AdminContext";

const Dashboard = () => {
    const {admin,setAdmin} = useAdmin();
    console.log(admin);

    return (
        <>

            <Container>
                <Grid spacing={4} container>

                    <Grid size={{ lg: 8 }}>
                        <Box sx={{
                            display: 'flex',
                            width: '100%',
                            flexDirection: 'column'
                        }}>


                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 500,
                                fontSize: "24px",
                                lineHeight: "42px",
                                position:'relative',
                                top:'-15px'
                            }}>Hello {admin?.name ? admin.name : 'Admin'}  </Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap:'14px'
                             }} >
                                <Box sx={{
                                    background: "#FFEFE7",
                                    borderRadius: "10px", 
                                    height: "136px", 
                                    width: "204px",
                                    display:'flex',
                                    flexDirection:'column',
                                    paddingLeft:'20px',
                                    gap:'16px'
                               
                                 }}>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          fontSize: "18px",
                                          lineHeight: "28px",
                                          marginTop:'12px'
                                    }}>Available Position</Typography>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          fontSize: "36px",
                                          lineHeight: "28px",
                                    }}>24</Typography>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          color:'#FF5151'
                                    }}>4 Urgently needed</Typography>
                                </Box>
                                <Box sx={{
                                    background: "#E8F0FB",
                                    borderRadius: "10px", 
                                    height: "136px", 
                                    width: "204px",
                                    display:'flex',
                                    flexDirection:'column',
                                    paddingLeft:'20px',
                                    gap:'16px'
                               
                                 }}>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          fontSize: "18px",
                                          lineHeight: "28px",
                                          marginTop:'12px'
                                    }}>Job Open</Typography>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          fontSize: "36px",
                                          lineHeight: "28px",
                                    }}>10</Typography>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          color:'#3786F1'
                                    }}>4 Actively Hiring</Typography>
                                </Box><Box sx={{
                                    background: "#FDEBF9",
                                    borderRadius: "10px", 
                                    height: "136px", 
                                    width: "204px",
                                    display:'flex',
                                    flexDirection:'column',
                                    paddingLeft:'20px',
                                    gap:'16px'
                               
                                 }}>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          fontSize: "18px",
                                          lineHeight: "28px",
                                          marginTop:'12px'
                                    }}>New Employees</Typography>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          fontSize: "36px",
                                          lineHeight: "28px",
                                    }}>4</Typography>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 400,
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          color:'#EE61CF'
                                    }}>4 Department</Typography>
                                </Box>
                            </Box>

                        </Box>

                    </Grid>
                    <Grid size={{ lg: 4}}>
                        <Box sx={{
                            width:'100%',
                            display:'flex'
                         }}>
                            <Box sx={{width:'100%',background:'#1B204A',height:'240px',borderRadius:'10px'}}>
                             <Typography sx={{
                                  fontFamily: "'Poppins'",
                                  fontStyle: "normal",
                                  fontWeight: 500,
                                  fontSize: "18px",
                                  lineHeight: "28px",
                                  color:'white',
                                  fontSize:'12px',
                                  position:"relative",
                                  left:'24px',
                                  top:'7px'

                             }}>
                                Recently Activity
                             </Typography>
                             <Box sx={{
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'center',
                                paddingLeft:'24px',
                                
                                position:'relative',
                                top:'28px',
                                
                             }}>
                             <Typography sx={{
                                 fontFamily: "'Poppins'",
                                 fontStyle: "normal",
                                 fontWeight: 500,
                                 fontSize: "10px",
                                 lineHeight: "12px",
                                 color: "#FFFFFF",
                                 color: "#FFFFFF",
                                 opacity: 0.6,
                                 border: "1px solid #000000",
                             }}>
                               10.40 AM, Fri 10 Sept 2021
                             </Typography>
                             <Typography sx={{
                                  fontFamily: "'Poppins'",
                                  fontStyle: "normal",
                                  fontWeight: 500,
                                  fontSize: "12px",
                                  lineHeight: "28px",
                             
                                  color: "#FFFFFF",

                             }}>
                               You Posted a New Job
                             </Typography>
                             <Typography sx={{
                                 fontFamily: "'Poppins'",
                                 fontStyle: "normal",
                                 fontWeight: 400,
                                 fontSize: "10px",
                                 lineHeight: "20px",
                                 fontFeatureSettings: "'salt' on, 'liga' off",
                                 color: "#FFFFFF",
                                 opacity: 0.8,
                             }}> Kindly check the requirements and terms of work and make sure everything is right.</Typography>
                             </Box>
                             
                             <Box sx={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'space-around',
                                padding:'24px',
                                position:'relative',
                                top:'40px'
                             }}>
                                <Typography sx={{
                                      fontFamily: "'Poppins'",
                                      fontStyle: "normal",
                                      fontWeight: 400,
                                      fontSize: "12px",
                                      lineHeight: "21px",
                                      color: "#FFFFFF",
                                }}>
                                Today you makes 12 Activity
                                </Typography>
                                <Button sx={{
                                      width: "100px",
                                      height: "25px",
                                      background: "rgb(251, 145, 0)",
                                      borderRadius: "4px",
                                }}>
                                    <Typography sx={{
                                          fontFamily: "'Poppins'",
                                          fontStyle: "normal",
                                          fontWeight: 500,
                                          fontSize: "12px",
                                          lineHeight: "21px",
                                          display: "flex",
                                          alignItems: "center",
                                          textAlign: "center",
                                          color:'rgb(36, 30, 30)'
                                    }}>See All </Typography>
                                </Button>
                                </Box>
                            </Box>

                        </Box>

                    
                    </Grid>
                    <Grid size={{lg:8}}>
                <Box sx={{
                    display:'flex',
                    flexDirection:'row',
                    gap:'20px'
                }}>
                <Box sx={{
                              background: "#FFFFFF",
                              width:'50%',
                              border: "1px solid #E0E0E0",
                              borderRadius: "10px"
                        }}></Box>
                <Box sx={{
                              background: "#FFFFFF",
                              width:'50%',
                              border: "1px solid #E0E0E0",
                              borderRadius: "10px"
                        }}></Box>
                </Box>
                    </Grid>
                    <Grid size={{lg:4}}>
                        <Box sx={{
                              background: "#FFFFFF",
                              border: "1px solid #E0E0E0",
                              borderRadius: "10px"
                        }}></Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Dashboard;