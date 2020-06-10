const streamer = require('./streamer');

const get = () => streamer.getCalls();

module.exports = {
  get
};
