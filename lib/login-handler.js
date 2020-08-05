'use strict';
const pug = require('pug');

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
    path: req.url,
    formactionURL: '/posts'
  }));
  res.end();
};

module.exports = {
  handleLogin
};