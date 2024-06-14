/*

If you are having trouble launching with the default ports (3000 and 5000),
feel free to modify them and try some alternatives (2999 and 4999) here until the application launches without issues.

*/

const config = {
    port: process.env.PORT || 3000,
    json_server_port : process.env.JSON_SERVER_PORT || 5000
  };
  
module.exports = config;