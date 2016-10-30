// Simple WebServer with version 7

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node v7\n');
});

server.listen(port, hostname, () => {
  console.log(`V7 Server running at http://${hostname}:${port}/`);
});