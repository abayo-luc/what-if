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
      content: DataTypes.STRING,
      userId: DataTypes.UUID,
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
  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return Post;
};
