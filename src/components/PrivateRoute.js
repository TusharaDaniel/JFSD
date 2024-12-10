import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('role'); // Example of token-based authentication check
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
