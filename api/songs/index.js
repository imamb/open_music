const { server } = require('@hapi/hapi');
const SongsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'Open-Music',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const songsHandler = new SongsHandler(service, validator);
    server.route(routes(songsHandler));
  },
};