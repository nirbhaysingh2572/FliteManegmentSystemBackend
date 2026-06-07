'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Roles', [
      {
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'DEVLOPER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'AIRLINE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        role: 'COSTOMER',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
