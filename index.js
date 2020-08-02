'use strict';

const http = require('http');    // http モジュールのインポート
const pug = require('pug');    // pug のインポート
const moment = require('moment')    // 時間を扱う moment.jsのインポート

const router = require('./lib/router');    // ルーティング処理を行っているファイルをインポート

const today = moment(new Date()).format('YYYY/MM/DD HH:mm:ss');    // 本日の日付を取得

// サーバーを設置
const server = http.createServer( (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'    // サーバーを立てた際は writeheadでステータスコードと、res として返すデータ型を規程させる
  });
  router.route(req, res);    // ルーティング処理
})
.on('error', (e) => {
  console.error('[' + today + ']' + 'Server Error: ' + e);    // error　イベントが発生したら サーバーエラーの内容をログとして表示
})
.on('clientError', (e) => {    
  console.error('[' + today + ']' + 'Client Error: ' + e);    // client error イベントが発生したら クライエントエラーをログとして表示
});

// サーバー接続時にログを表示させる
const port = 8000;
server.listen(port, () => {
  console.info('[' + today + ']' + 
  ' Listening on ' + port);
});