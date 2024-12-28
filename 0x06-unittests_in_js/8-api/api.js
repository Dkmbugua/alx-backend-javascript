// api.js
const express = require('express');

const app = express();
const port = 7865;

// Define the route for the root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Start the server
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app; // Export the app for testing
