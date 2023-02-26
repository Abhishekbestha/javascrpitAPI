const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
