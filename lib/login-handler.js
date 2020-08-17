'use strict';
const pug = require('pug');
const moment = require('moment');

const today = moment(new Date()).format('YYYY/MM/DD HH:mm:ss');


/**
 * ログイン時のイベントハンドリング
 * @param {httpRequestObject} req 
 * @param {httpResponseObject} res 
 */
function handleLogin(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=UTF-8'
  });
  res.write(pug.renderFile('./views/login.pug', {
    path: req.url
  }));
  console.info('[' + today + '] ' + '{user: ' + req.connection.remoteAddress + ' } ' + 'Entered my Web');

  // ToDo: ログイン認証をパスしたら、コンソール上に「today + req.connection.remoteAddress + Logined」を表示
  
  res.end();
};

module.exports = {
  handleLogin
};