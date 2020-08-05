'use strict';

/**
 * 404 BadRequest時のエラーハンドリング
 * @param {httpRequestObject} req 
 * @param {httpResponseObject} res 
 */
function handleBadRequest(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=UTF-8'
  });
  res.write('未対応のメソッドです');
};

module.exports = {
  handleBadRequest
};