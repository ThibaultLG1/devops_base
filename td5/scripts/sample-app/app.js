const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.send('DevOps Labs!');
});

const port = process.env.JEST_WORKER_ID ? 0 : process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});


module.exports = server;


