"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cover: {
        type: Sequelize.STRING,
        defaultValue:
          "https://res.cloudinary.com/dghepsznx/image/upload/v1549123382/WhatIf/3.jpg",
        allowNull: false
      },
      content: {
        type: Sequelize.STRING(10000),
        allowNull: false
      },
      author: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Posts");
  }
};
