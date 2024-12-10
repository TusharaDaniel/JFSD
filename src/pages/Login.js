// pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import the updated CSS

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the user exists in the "mock database"
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            console.log('Login successful:', user);
            // Optionally store user info in local storage
            localStorage.setItem('role', 'student'); // Example role
            // Redirect to dashboard after successful login
            navigate('/dashboard');
        } else {
            setErrorMessage('Login failed. Please check your credentials.');
            console.error('Login failed: Invalid credentials');
        }
    };

    return (
        <div 
            className="container" 
            style={{ 
                backgroundImage: 'url(https://files.123freevectors.com/wp-content/original/130963-abstract-blue-and-white-polygon-background-graphic-design-vector-image.jpg)', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', // Ensure it covers the full viewport height
            }}
        >
            <div className="card">
                <h2>Login</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button onClick={handleLogin}>Login</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>
    );
};
function loginUser(username, password) {
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token);  // Store JWT token
          console.log('Login successful');
        } else {
          console.log('Error:', data.message);
        }
      })
      .catch(error => console.log('Error:', error));
  }
  
export default Login;
