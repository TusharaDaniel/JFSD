// components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('role'); // Check if user is logged in

    const handleLogout = () => {
        localStorage.removeItem('role'); // Clear user role on logout
        navigate('/login'); // Redirect to login page
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MindMentor
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    {isAuthenticated ? (
                        <>
                            <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/resources">Resources</Button>
                            <Button color="inherit" component={Link} to="/support-groups">Support Groups</Button>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                            <Button color="inherit" component={Link} to="/register">Register</Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
