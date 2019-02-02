"use strict";
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: DataTypes.STRING,
      cover: DataTypes.STRING,
      content: DataTypes.STRING,
      author: DataTypes.INTEGER
    },
    {}
  );
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
