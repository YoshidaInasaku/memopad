'use strict';

const http = require('http');    // http モジュールのインポート
const pug = require('pug');    // pug のインポート

const moment = require('moment')    // 時間を扱う moment.jsのインポート

const today = moment(new Date()).format('YYYY/MM/DD HH:mm:ss');    // 本日の日付を取得

// サーバーを設置
const server = http.createServer( (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.write('Hello World!');
  res.end(); 
});

const port = 8000;
server.listen(port, () => {
  console.info('[' + today + ']' + 
  ' Listening on ' + port);
});