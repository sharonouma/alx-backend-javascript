const http = require('http');

const hostname = 'localhost';
const port = 1245;
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server listening at http://${hostname}:${port}/`);
});

module.exports = app;
