const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // your MySQL username
  password: 'root',  // your MySQL password
  database: 'hackathon',  // your MySQL database name
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL');
});

// User Registration Route
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (results.length > 0) {
      return res.status(400).send('User already exists');
    }

    // Hash password and save to DB
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).send('Error hashing password');
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
        if (err) return res.status(500).send('Error saving user to database');
        res.status(201).send('User registered successfully');
      });
    });
  });
});

// User Login Route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).send('Database error');
    if (results.length === 0) return res.status(404).send('User not found');

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).send('Error comparing passwords');
      if (!isMatch) return res.status(400).send('Invalid credentials');

      const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
