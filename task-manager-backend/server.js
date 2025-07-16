// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

// Initialize app
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
