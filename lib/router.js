'use strict'; 

/**
 * ルーティング処理
 * @param {httpRequestObject} req 
 * @param {httpResponseObject} res 
 */
function route(req, res) {
  switch (req.method) {
    case 'GET':
      res.write(req.url + 'GET');    // GET の場合は コンソール表示のみで処理終了
      break;

    case 'POST':
      res.write(req.url + 'POST');    // POST の場合は ストリーム形式で流れるデータを取得して、コンソール上に表示する
      let rawData = ''

      req
        .on('data', (chunk) => {
          rawData += chunk;
        })
        .on('end', () => {
          console.info('[' + today + ']' + 'Posted Data: ' + rawData);
        });
      break;

    default:
      break;
  };
  res.end();
};

// 関数をモジュール化して、他のファイルでも使用できるようにする
module.exports = {
  route
};