const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const config = require('./config'); // Import the configuration

server.use(middlewares);
server.use(router);

const JSON_SERVER_PORT = config.json_server_port;

server.listen(JSON_SERVER_PORT, () => {
  console.log(`JSON Server is running on port ${JSON_SERVER_PORT}`);
});
