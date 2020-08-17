'use strict';
const moment = require('moment');

const loginHandler = require('./login-handler');
const postsHandler = require('./posts-handler');
const utilsHandler = require('./utils-handler');


const today = moment(new Date()).format('YYYY/MM/DD HH:mm:ss');

/**
 * ルーティング処理
 * @param {httpRequestObject} req 
 * @param {httpResponseObject} res 
 */
function route(req, res) {
  switch (req.url) {
    case '/login':
      loginHandler.handleLogin(req, res);
      break;

    case '/posts?all':
      postsHandler.handlePosts(req, res);
      break;

    default:
      utilsHandler.handleBadRequest(req, res);
      console.info('[' + today + ']' + ' 404 Bad Request: 未対応のメソッドです by ' + req.url);
      break;
  };
  res.end();
};

// 関数をモジュール化して、他のファイルでも使用できるようにする
module.exports = {
  route
};