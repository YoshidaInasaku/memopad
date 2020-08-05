'use strict';
const pug = require('pug');

/**
 * Post時のイベントハンドリング
 * @param {httpRequestObject} req 
 * @param {httpResponseObject} res 
 */
function handlePosts(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=UTF-8'
  });
  res.write(pug.renderFile('./views/posts.pug'));
};

module.exports = {
  handlePosts
};