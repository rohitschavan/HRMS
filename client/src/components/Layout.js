import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import { Grid, TextField } from '@mui/material';
import Logo from '../assets/logo.svg';

import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import userIcon from '../assets/usericon.png';
import { NavLink, Outlet, useMatch } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BadgeIcon from '@mui/icons-material/Badge';
import { useState } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useAdmin } from '../context/AdminContext';
import AvatarMenu from './AvatarMenu';
const drawerWidth = 240;
// rgb(251 145 0)
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

export default function Layout({ children }) {
    const {admin} = useAdmin()
    // const isActive = useMatch('/employee/register');
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        // setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', position: 'relative', top: '30px' }}>
            <CssBaseline />
            <AppBar sx={{
                backgroundColor: 'white',
                boxShadow: 'none'
            }} position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                marginRight: 5,
                                color: 'black'
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{
                        display: 'flex',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>

                 
                        <Typography sx={{
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "28px",
                            lineHeight: "40px",
                            color: "#333333",
                            fontFamily: 'Poppins',
                            position: 'relative',
                            left: '20px'
                        }} variant="h6" noWrap component="div">
                           Dashboard
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: '0px',

                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '0px',
                                position: 'relative',
                                right: '50px',

                            }}>
                                <TextField
                                    placeholder="Search for Anything"
                                    variant="outlined"
                                    sx={{
                                        fontFamily: 'poppins',
                                        '& .MuiOutlinedInput-root': {
                                            height: '40px', // Adjust overall height
                                        },
                                        '& .MuiInputBase-input': {
                                            height: '40px', // Adjust input field height
                                            padding: '10px', // Adjust padding
                                        },

                                    }}
                                />

                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '20px',
                                position: 'relative',

                            }}>
                                <NotificationsIcon sx={{
                                    color: '#C4C4C4'
                                }} />
                                <HelpIcon sx={{
                                    color: '#C4C4C4'
                                }} />
                           <AvatarMenu admin={admin}/>
                            </Box>

                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        flexDirection: "row"
                    }}>


                        <Box sx={{
                            width: '140px',

                        }} component='img' src={Logo}></Box>
                    </Box>

                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem>
                        <Box sx={
                            {
                                display: 'flex',

                                flexDirection: 'column',
                                gap: '30px',
                                width: '100%',
                            }
                        }>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "26px",
                                letterSpacing: "0.01em",
                                textTransform: "uppercase",
                                color: "#333333",
                                flex: "none",

                            }}>Register</Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: '100%',
                                gap: '10px'
                            }}>
                                <NavLink
                                    to='/hr/register'
                                    style={({ isActive }) => ({
                                        background: isActive ? "rgb(251 145 0)" : "white",
                                        textDecoration: 'none',
                                        color: isActive ? '#241e1e' : '#6a5656',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        letterSpacing: "0.03em",
                                        borderRadius: '3px',
                                        transition: '0.2s'
                                    })}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            flexDirection: 'row',
                                            gap: '14px',
                                            alignItems: 'center',
                                            height: "45px",

                                        }}
                                    >
                                        {/* ✅ Dynamically change icon color based on active state */}
                                        <HowToRegIcon
                                            style={{
                                                color: 'black',
                                                position: 'relative',
                                                left: '10px'
                                            }}
                                        />
                                        HR Register
                                    </Box>
                                </NavLink>
                                <NavLink
                                    to='/employee/register'
                                    style={({ isActive }) => ({
                                        background: isActive ? "rgb(251 145 0)" : "white",
                                        textDecoration: 'none',
                                        color: isActive ? '#241e1e' : '#6a5656',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        letterSpacing: "0.03em",
                                        borderRadius: '3px',
                                        transition: '0.2s'
                                    })}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            flexDirection: 'row',
                                            gap: '14px',
                                            alignItems: 'center',
                                            height: "45px",

                                        }}
                                    >
                                        {/* ✅ Dynamically change icon color based on active state */}
                                        <BadgeIcon
                                            style={{
                                                color: 'black',
                                                position: 'relative',
                                                left: '10px'
                                            }}
                                        />
                                        Employee Register
                                    </Box>
                                </NavLink>
                            </Box>
                        </Box>




                    </ListItem>
                    <ListItem>
                        <Box sx={
                            {
                                display: 'flex',

                                flexDirection: 'column',
                                gap: '30px',
                                width: '100%',
                            }
                        }>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "26px",
                                letterSpacing: "0.01em",
                                textTransform: "uppercase",
                                color: "#333333",
                                flex: "none",

                            }}>Manage</Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: '100%',
                                gap: '10px'
                            }}>
                                <NavLink
                                    to='/manage/hr'
                                    style={({ isActive }) => ({
                                        background: isActive ? "rgb(251 145 0)" : "white",
                                        textDecoration: 'none',
                                        color: isActive ? '#241e1e' : '#6a5656',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        letterSpacing: "0.03em",
                                        borderRadius: '3px',
                                        transition:'0.2s'
                                    })}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            flexDirection: 'row',
                                            gap: '14px',
                                            alignItems: 'center',
                                            height: "45px",

                                        }}
                                    >
                                        {/* ✅ Dynamically change icon color based on active state */}
                                        <HowToRegIcon
                                            style={{
                                                color: 'black',
                                                position: 'relative',
                                                left: '10px'
                                            }}
                                        />
                                        Manage HR
                                    </Box>
                                </NavLink>
                                <NavLink
                                    to='/manage/employee'
                                    style={({ isActive }) => ({
                                        background: isActive ? "rgb(251 145 0)" : "white",
                                        textDecoration: 'none',
                                        color: isActive ? '#241e1e' : '#6a5656',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        letterSpacing: "0.03em",
                                        borderRadius: '3px',
                                        transition:'0.2s'
                                    })}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            flexDirection: 'row',
                                            gap: '14px',
                                            alignItems: 'center',
                                            height: "45px",

                                        }}
                                    >
                                        {/* ✅ Dynamically change icon color based on active state */}
                                        <ManageAccountsIcon
                                            style={{
                                                color: 'black',
                                                position: 'relative',
                                                left: '10px'
                                            }}
                                        />
                                        Manage Employees
                                    </Box>
                                </NavLink>
                            </Box>
                        </Box>




                    </ListItem>
                    <ListItem>
                        <Box sx={
                            {
                                display: 'flex',

                                flexDirection: 'column',
                                gap: '30px',
                                width: '100%',
                            }
                        }>
                            <Typography sx={{
                                fontFamily: "'Poppins'",
                                fontStyle: "normal",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "26px",
                                letterSpacing: "0.01em",
                                textTransform: "uppercase",
                                color: "#333333",
                                flex: "none",

                            }}>Recruitment</Typography>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: '100%',
                                gap: '10px'
                            }}>
                                <NavLink
                                    to='/manage/jobs'
                                    style={({ isActive }) => ({
                                        background: isActive ? "rgb(251 145 0)" : "white",
                                        textDecoration: 'none',
                                        color: isActive ? '#241e1e' : '#6a5656',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        letterSpacing: "0.03em",
                                        borderRadius: '3px',
                                       transition:'0.2s'
                                    })}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            flexDirection: 'row',
                                            gap: '14px',
                                            alignItems: 'center',
                                            height: "45px",

                                        }}
                                    >
                                        {/* ✅ Dynamically change icon color based on active state */}
                                        <HowToRegIcon
                                            style={{
                                                color: 'black',

                                                position: 'relative',
                                                left: '10px'
                                            }}
                                        />
                                        All Jobs
                                    </Box>
                                </NavLink>
                                <NavLink
                                    to='/jobs/create'
                                    style={({ isActive }) => ({
                                        background: isActive ? "rgb(251 145 0)" : "white",
                                        textDecoration: 'none',
                                        color: isActive ? '#241e1e' : '#6a5656',
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        fontSize: "14px",
                                        lineHeight: "21px",
                                        letterSpacing: "0.03em",
                                        borderRadius: '3px',
                                        transition:'0.2s'
                                    })}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            flexDirection: 'row',
                                            gap: '14px',
                                            alignItems: 'center',
                                            height: "45px",

                                        }}
                                    >
                                        {/* ✅ Dynamically change icon color based on active state */}
                                        <BadgeIcon
                                            style={{
                                                color: 'black',
                                                position: 'relative',
                                                left: '10px'
                                            }}
                                        />
                                        Create A Job
                                    </Box>
                                </NavLink>
                            </Box>
                        </Box>




                    </ListItem>


                </List>


            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Grid container>
                    <Grid size={{ lg: 12 }}>
                        <Outlet />

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
