import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = !!localStorage.getItem('role'); // Check for user role

    return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
