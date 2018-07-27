const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// serve static assets normally
app.use(express.static(path.join(__dirname, 'dist')));

// handle every other route with index.html
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);
console.log(`server started on port http://localhost:${port}`);
