const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

//Post contains title and body
Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Post;