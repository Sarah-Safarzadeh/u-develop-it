const express = require('express');
const PORT = process.envPORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Initialize Express.js Server on 3001
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});