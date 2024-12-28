// api.js
const express = require('express');

const app = express();
const port = 7865;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Cart endpoint
app.get('/cart/:id(\\d+)', (req, res) => {
    const cartId = req.params.id;
    res.send(`Payment methods for cart ${cartId}`);
});

// Handle invalid cart IDs
app.use('/cart/:id', (req, res) => {
    res.status(404).send('Invalid cart ID');
});

// Start the server
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app; // Export for testing
