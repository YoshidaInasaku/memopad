'use strict';

const http = require('http');
const moment = require('moment')

const today = moment(new Date()).format('YYYY/MM/DD hh:mm:ss');

const server = http.createServer( (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.write('Hello World!');
  res.end(); 
});

const port = 8000;
server.listen(port, () => {
  console.info(today + ':Listening on ' + port)
});