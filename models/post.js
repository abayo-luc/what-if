'use strict';
import slug from 'slug';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      id: {
        allowNull: false,
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      title: DataTypes.STRING,
      cover: DataTypes.STRING,
      content: DataTypes.STRING,
      author: DataTypes.UUID,
      slug: { type: DataTypes.STRING, allowNull: false }
    },
    {
      hooks: {
        beforeCreate(article) {
          article.slug = slug(
            `${article.title}-${(Math.random() * 36 ** 6 || 0).toString(36)}`
          ).toLowerCase();
        }
      }
    }
  );
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
