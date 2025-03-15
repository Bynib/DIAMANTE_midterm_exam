// importing express module
const express = require('express');

// creating new express app
const app = express();

// defining new route for /test
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Christina Diamante' });
});

// starting the server and listening to port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
