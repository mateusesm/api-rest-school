"use strict";const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Joãozinho',
          email: 'jj@mail.com',
          password_hash: await bcrypt.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Luizinho',
          email: 'll@mail.com',
          password_hash: await bcrypt.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Zezinho',
          email: 'zz@mail.com',
          password_hash: await bcrypt.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
