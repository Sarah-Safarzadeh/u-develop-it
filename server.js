const express = require('express');
const PORT = process.envPORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// GET route
app.get('/', (res, req) => {
    res.json({
        message: 'Hello World'
    });
});

// Initialize Express.js Server on 3001
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});