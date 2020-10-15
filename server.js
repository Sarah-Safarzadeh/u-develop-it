const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Initialize Express.js Server on 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});