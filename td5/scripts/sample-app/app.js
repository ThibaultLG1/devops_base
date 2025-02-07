const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevOps Labs');
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Export du serveur pour Supertest
module.exports = server;