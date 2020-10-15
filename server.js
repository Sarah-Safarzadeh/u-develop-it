const express = require('express');
const PORT = process.envPORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());