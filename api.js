// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Parse incoming request data as JSON
app.use(bodyParser.json());

// Define a simple GET route
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Define a simple POST route
app.post('/echo', (req, res) => {
  const message = req.body.message;
  res.send(`You said: ${message}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
