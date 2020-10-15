const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const sqlite3 = require('sqlite3').verbose();

// MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }
  
    console.log('Connected to the election database.');
  });


// Routes
db.all(`SELET * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request(Not Found) Catch all -- 404
app.use((req, res) => {
    res.status(404).end();
});

// Initialize Express.js Server on 3001
// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });