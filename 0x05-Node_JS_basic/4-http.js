#!/usr/bin/env node
// Creates a small HTTP server using Node's HTTP module
const { createServer } = require('node:http');

const hostName = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});

module.exports = app;
