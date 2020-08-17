'use strict';
const pug = require('pug');
const moment = require('moment');

const today = moment(new Date()).format('YYYY/MM/DD HH:mm:ss');

const Post = require('./post');


/**
 * Post時のイベントハンドリング
 * @param {httpRequestObject} req 
 * @param {httpResponseObject} res 
 */
function handlePosts(req, res) {
  writeDownDb_userInformation(req, res);    // ユーザーの情報をDBに保存. コンソールに表示

  res.writeHead(200, {
    'Content-Type': 'text/html; charset=UTF-8'
  });
  res.write(pug.renderFile('./views/posts.pug'));
  res.end();  
};


/**
 * ログインユーザ情報をデータベースに登録する処理
 * ToDo: メールアドレスとパスワードをそれぞれデータベースに保存
 */
function writeDownDb_userInformation(req, res) {
  let body = [];
  req
    .on('data', chunk => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      const decoded = decodeURIComponent(body);

      const matchResult = decoded.match(/mailaddress=(.*)&password=(.*)/);
      const mailAddress = matchResult[1];
      const password = matchResult[2]; 

      console.info('[' + today + '] ' + 'Now Logined By: ' + mailAddress);
      handleRedirect(req, res);
    });
};


/**
 * ToDo: モーダルから投稿した内容をデータベースに保存する処理
 * @param {*} req 
 * @param {*} res 
 */



/**
 * リダイレクト処理
 */
function handleRedirect(req, res) {
  res.writeHead(303, {
    Location: '/posts'
  });
  res.end();
};


module.exports = {
  handlePosts
};