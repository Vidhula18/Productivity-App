// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });
const cors = require('cors');
const todosRoutes = require('./routes/todos');

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Routes
app.use('/api/todos', todosRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Respond to preflight requests
app.options('/api/todos', cors());
