import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
const AvatarMenu = () => {
    const navigate = useNavigate('');
    const [anchorEl, setAnchorEl] = useState(null);
    const { admin, setAdmin } = useAdmin();

    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAdmin(null);
        navigate('/');
    };



    return (
        <>
            <Tooltip title="Account settings">
                <IconButton onClick={handleOpen} size="small" sx={{ ml: 2 }}>
                    <Avatar sx={{ bgcolor: "rgb(251, 145, 0)", width: 32, height: 32 }}>
                        <Typography sx={{ fontSize: "0.7rem", fontFamily: "Poppins", color: "black" }}>
                            {admin?.name ? admin.name.charAt(0).toUpperCase() : "A"}
                        </Typography>
                    </Avatar>

                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 3,
                    sx: {
                        mt: 1.5,
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.1))",
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem onClick={() => alert("Profile Clicked")}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default AvatarMenu;
