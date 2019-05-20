'use strict';
const faker = require('faker');
const articles = [];
for (let i = 0; i < 101; i++) {
  articles.push({
    id: faker.random.uuid(),
    slug: faker.lorem.slug(),
    title: faker.lorem.sentence(3, [10, 50]),
    content: faker.lorem.paragraphs(4, '\n \r'),
    author: '6e1bacf0-c075-4a3d-b341-c08c65b9c6dd',
    createdAt: new Date(faker.date.past()),
    updatedAt: new Date()
  });
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [...articles], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
