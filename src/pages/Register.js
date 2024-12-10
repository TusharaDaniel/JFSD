// pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/Register.css'; // Ensure the CSS file is imported

const Register = () => {
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
    });
    
    const navigate = useNavigate(); // Initialize useNavigate

    const handleRegister = () => {
        // Save the user details in local storage as a mock database
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push(userDetails);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        console.log('Registration successful:', userDetails);
        // Redirect to dashboard after registration
        navigate('/dashboard'); // Redirect directly to the dashboard
    };
    function registerUser(username, password) {
        fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              console.log('User registered successfully');
            } else {
              console.log('Error:', data.message);
            }
          })
          .catch(error => console.log('Error:', error));
      }
      
    return (
        <div 
            className="register-container" 
            style={{ 
                backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXT-N0f6s2M2JESE2T8BtIULDHvaGM3gX2Q&s)', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', // Ensure it covers the full viewport height
            }}
        >
            <div className="card">
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={userDetails.name}
                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={userDetails.email}
                    onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={userDetails.password}
                    onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                />
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
};

export default Register;










