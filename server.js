const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  const stream = fs.createReadStream('./index.html', 'utf8');
  stream.pipe(response);
  stream.on('end', () => {
    response.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is up and running at http://${hostname}:${port}`);
});
