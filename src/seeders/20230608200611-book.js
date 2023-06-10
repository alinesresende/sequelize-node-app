'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [{
     title: 'Twilight',
     author: 'Stephenie Meyer',
     pageQuantity: 350,
     createdAt: '2008-12-19 00:00:00',
     updatedAt: '2008-12-19 00:00:00'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
    
  }
};
