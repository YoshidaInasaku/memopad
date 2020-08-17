'use strict';
const Sequelize = require('sequelize');    // モジュールのインポート

// オブジェクトの作成
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/memopad',    // プロトコル://ログインユーザー名:パスワード@アクセス先サーバー名/パス
  {
    logging: false    // ログの設定をオフ
  }
);

const Post = sequelize.define(
  'Post',    // 投稿されたものを「ポスト」というデータベースに置き換え
  {
    mailAddress: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    password: {
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.TEXT
    },
    postedBy: {
      type: Sequelize.STRING
    },
    trackingCookie: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true,    // データを保存した領域の名前をPostという名前に固定
    timeStamps: true    // 自動でデータ作成日時と更新日時（createdAt / updatedAt）を追加してくれる
  }
);

Post.sync();   // Postというオブジェクトをデータベースの更新と同期がとれるようにする

module.exports = {
  Post
};

