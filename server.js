const http = require('http');
const streamer = require('./streamer');
const foo = require('./foo.js');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  //console.log('Request', request);
  if (request.method === 'POST'
    && request.url === '/') {
    response.statusCode = 201;
    response.end('Created');
  } else {
    streamer.streamTo(response);
    console.log(`Foo can see ${foo.get()} calls in streamer`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is up and running at http://${hostname}:${port}`);
});
