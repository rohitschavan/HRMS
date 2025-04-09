import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const HRDashboard = () => {

    const [allJobs, setAllJobs] = useState([]);
    const [allCandidates, setAllCandidates] = useState([]);
    const [allEmp, setAllEmp] = useState([]);


    useEffect(() => {

        getAllJobs();
        getAllCandidates();
        getAllEmp();
    }, [])

    const getAllJobs = async () => {
        try {
            const { data } = await axios.get('http://localhost:9000/jobs');
            if (data?.err) {
                toast.error(data?.err);
            } else {
                // Sort by createdAt in descending order (newest first)
                const sortedJobs = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setAllJobs(sortedJobs);
            }
        } catch (error) {
            toast.error("Failed to fetch jobs");
            console.error(error);
        }
    };

    const getAllEmp = async () => {
        const { data } = await axios.get('http://localhost:9000/employee');
        if (data?.err) {
            toast.error(data?.err);
        }

        setAllEmp(data.data);

    }

    const getAllCandidates = async () => {
        const { data } = await axios.get('http://localhost:9000/candidate');
        if (data?.err) {
            toast.error(data?.err)
        }
        setAllCandidates(data);

    }




    const jobTypeCount = allJobs?.reduce((acc, job) => {
        const type = job.jobType.toLowerCase(); // normalize casing
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});


    const statusCountsRaw = allCandidates?.allCandidates?.reduce((acc, candidate) => {
        const status = candidate.status;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
    }, {});

    const DesignationRaw = allEmp?.reduce((acc, candidate) => {
        const role = candidate.role;
        acc[role] = (acc[role] || 0) + 1;
        return acc;
    }, {});

    const ShortlistedCandidates = allCandidates?.allCandidates?.filter((e)=>{
        return e.status === 'Shortlisted'
    })

    console.log('short',ShortlistedCandidates);
    // Ensure all enum statuses are represented even if 0
    const statusCounts = {
        Applied: statusCountsRaw?.Applied || 0,
        Shortlisted: statusCountsRaw?.Shortlisted || 0,
        Interviewed: statusCountsRaw?.Interviewed || 0,

        Rejected: statusCountsRaw?.Rejected || 0
    };
    const DesignationCounts = {
        Manager: DesignationRaw?.Manager || 0,
        TeamLead: DesignationRaw?.TeamLead || 0,

        Dev: DesignationRaw?.Dev || 0
    };






    return (
        <>
            <Container >
                <Grid spacing={1} container>
                    <Grid size={{ lg: 12 }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '30px',
                            width: '93%',
                            position: 'relative',
                            left: '-15px'

                        }}>



                            <Box sx={{
                                width: "25%",
                                height: "200px",
                                background:
                                    "linear-gradient(101.63deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 99.84%, rgba(255, 255, 255, 0) 99.84%), #29AB91",
                                borderRadius: "10px",
                                flex: "none",
                                order: 0,
                                flexGrow: 1
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: '100%'
                                }}>
                                    <Typography sx={{
                                        fontFamily: "'Poppins'",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: "20px",
                                        lineHeight: "21px",
                                        color: "#FFFFFF",
                                        flex: "none",
                                    }}>Total Jobs</Typography>
                                    <Typography sx={{
                                        fontFamily: "'Poppins'",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        fontSize: "24px",
                                        lineHeight: "30px",
                                        color: "#FFFFFF",
                                        flex: "none",
                                    }}>{allJobs?.length}</Typography>
                                    <br />
                                    <Typography sx={{
                                        fontFamily: "'Poppins'",
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        fontSize: "20px",
                                        lineHeight: "21px",
                                        color: "#FFFFFF",
                                        flex: "none",
                                    }}>Job Type</Typography>
                                    {Object.entries(jobTypeCount || {}).map(([key, value]) => (
                                        <Typography sx={{

                                            fontFamily: "'Poppins'",
                                            fontStyle: "normal",

                                            fontSize: "15px",
                                            lineHeight: "30px",
                                            color: "#FFFFFF",
                                            flex: "none",

                                        }} key={key}>
                                            {key}: <span style={{
                                                fontFamily: "'Poppins'",
                                                fontStyle: "normal",
                                                fontWeight: 600,
                                                fontSize: "15px",
                                                lineHeight: "30px",
                                                color: "#FFFFFF",
                                                flex: "none",
                                            }}>
                                                {value} </span>
                                        </Typography>
                                    ))}

                                </Box>
                            </Box>
                            <Box sx={{
                                minWidth: "25%",
                                height: "200px",
                                background:
                                    "linear-gradient(101.59deg, rgba(255, 255, 255, 0.2) -0.16%, rgba(255, 255, 255, 0) 100%), #FFA600",
                                borderRadius: "10px",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                order: 0,
                                flexGrow: 1
                            }}>
                                <Typography sx={{
                                    fontFamily: "'Poppins'",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    lineHeight: "21px",
                                    color: "black",
                                    flex: "none",
                                    position: 'relative',
                                    top: '10px'
                                }}>Total Candidates</Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins'",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "30px",
                                    color: "black",
                                    flex: "none",
                                    position: 'relative',
                                    top: '10px'

                                }}>{allCandidates?.allCandidates?.length}</Typography>
                                <br />
                                <Typography sx={{
                                    fontFamily: "'Poppins'",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    lineHeight: "21px",
                                    color: "black",
                                    flex: "none",
                                }}>Status</Typography>
                                {statusCounts &&
                                    Object.entries(statusCounts).map(([status, count]) => (
                                        <Typography sx={{
                                            color: 'white',
                                            fontFamily: 'Poppins',
                                            fontSize: '14px',
                                            color: 'black'

                                        }} key={status}>
                                            {status}:  <span style={{
                                                fontFamily: 'Poppins',
                                                color: 'black',
                                                fontWeight: 600
                                            }}>{count}</span>
                                        </Typography>
                                    ))
                                }


                            </Box>







                            <Box sx={{
                                width: "25%",
                                height: "200px",
                                background:
                                    "linear-gradient(101.63deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 99.84%), #FF5630",
                                borderRadius: "10px",
                                flex: "none",
                                order: 0,
                                flexGrow: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>

                                <Typography sx={{
                                    fontFamily: "'Poppins'",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    lineHeight: "21px",
                                    color: "black",
                                    flex: "none",
                                }}>Total Employees</Typography>
                                <Typography sx={{
                                    fontFamily: "'Poppins'",
                                    fontStyle: "normal",
                                    fontWeight: 600,
                                    fontSize: "24px",
                                    lineHeight: "30px",
                                    color: "black",
                                    flex: "none",
                                }}>{allEmp?.length}</Typography>
                                <br />
                                <Typography sx={{
                                    fontFamily: "'Poppins'",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    lineHeight: "21px",
                                    color: "black",
                                    flex: "none",
                                }}>Designation</Typography>
                                {DesignationCounts &&
                                    Object.entries(DesignationCounts).map(([status, count]) => (
                                        <Typography sx={{
                                            color: 'white',
                                            fontFamily: 'Poppins',
                                            fontSize: '14px',
                                            color: 'black'

                                        }} key={status}>
                                            {status}:  <span style={{
                                                fontFamily: 'Poppins',
                                                color: 'black',
                                                fontWeight: 600
                                            }}>{count}</span>
                                        </Typography>
                                    ))
                                }
                            </Box>

                        </Box>
                    </Grid>



                    <Grid size={{ lg: 6 }}>
                        <Box sx={{
                            width: "360px",
                            height: "220px",
                            background: "#f4f4f4",
                            borderRadius: "10px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            left: '-14px',
                            top: '35px'
                         }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "'Poppins'",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    lineHeight: "21px",
                                    color: "black",
                                    flex: "none",
                                }}>Recently Added Jobs</Typography>
                                {
                                    allJobs?.slice(0, 2).map((e) => {
                                        return (
                                            <>
                                                <Box sx={{
                                                    width: "320px",
                                                    height: "58px",
                                                    background: "#F9F9F9",
                                                    borderRadius: "10px",
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '4px',
                                                    paddingLeft: '10px',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                    top: '15px'
                                                }}>
                                                    <Typography sx={{
                                                        fontFamily: "'Poppins'",
                                                        fontStyle: "normal",
                                                        fontWeight: 500,
                                                        fontSize: "16px",
                                                        lineHeight: "18px",
                                                        color: "#333333",

                                                    }}>
                                                        {e.title}
                                                    </Typography>

                                                    <Box sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        gap: '10px'
                                                    }}>
                                                        <Typography sx={{
                                                            fontFamily: "'Poppins'",
                                                            fontStyle: "normal",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            lineHeight: "15px",
                                                            color: "#8F8F8F",
                                                        }}>{e.location}</Typography>
                                                        <Typography sx={{
                                                            fontFamily: "'Poppins'",
                                                            fontStyle: "normal",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            lineHeight: "15px",
                                                            color: "#8F8F8F",
                                                        }}>{e.jobType}</Typography>
                                                    </Box>


                                                </Box>
                                                <br />
                                            </>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ lg: 6 }}>
                    <Box sx={{
                            width: "360px",
                            height: "220px",
                            background: "#f4f4f4",
                            borderRadius: "10px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            left: '12px',
                            top: '35px'
                         }}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "'Poppins'",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    fontSize: "20px",
                                    lineHeight: "21px",
                                    color: "black",
                                    flex: "none",
                                }}>Shortlisted Candidates</Typography>
                                {
                                    ShortlistedCandidates?.slice(0, 2).map((e) => {
                                        return (
                                            <>
                                                <Box sx={{
                                                    width: "320px",
                                                    height: "58px",
                                                    background: "#F9F9F9",
                                                    borderRadius: "10px",
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '4px',
                                                    paddingLeft: '10px',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    position: 'relative',
                                                    top: '15px'
                                                }}>
                                                    <Typography sx={{
                                                        fontFamily: "'Poppins'",
                                                        fontStyle: "normal",
                                                        fontWeight: 500,
                                                        fontSize: "16px",
                                                        lineHeight: "18px",
                                                        color: "#333333",

                                                    }}>
                                                        {e.name}
                                                    </Typography>

                                                    <Box sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        gap: '10px'
                                                    }}>
                                                        <Typography sx={{
                                                            fontFamily: "'Poppins'",
                                                            fontStyle: "normal",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            lineHeight: "15px",
                                                            color: "#8F8F8F",
                                                        }}>{e.email}</Typography>
                                                        <Typography sx={{
                                                            fontFamily: "'Poppins'",
                                                            fontStyle: "normal",
                                                            fontWeight: 400,
                                                            fontSize: "12px",
                                                            lineHeight: "15px",
                                                            color: "#8F8F8F",
                                                        }}>{e.mobile}</Typography>
                                                    </Box>


                                                </Box>
                                                <br />
                                            </>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
        </>
    )
}
export default HRDashboard