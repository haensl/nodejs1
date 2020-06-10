const fs = require('fs');

const state = {
  calls: 0
};

const streamTo = (response) => {
  const stream = fs.createReadStream('./index.html', 'utf8');
  response.setHeader('Content-Type', 'text/html');
  stream.pipe(response);
  stream.on('end', () => {
    response.statusCode = 200;
    response.end();
    state.calls++;
    console.log(`streamer has been called ${state.calls} times`);
  });
  stream.on('error', () => {
    response.statusCode = 500;
    response.end();
  });
};

const getCalls = () => state.calls;

module.exports = {
  getCalls,
  streamTo
};
