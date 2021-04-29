'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const users = new Array(120).fill(null).map((u, i) => {
      const user = {
        email: `user${i}@demo.io`,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthDate: faker.date.between('2000-01-01', '2002-01-05'),
        hashedPassword: bcrypt.hashSync(`password${i}`)
      }
      return user;
    })

    users[0] = {
      email: 'demo@user.io',
      firstName: 'Demo',
      lastName: 'User',
      birthDate: faker.date.between('2000-01-01', '2012-01-05'),
      hashedPassword: bcrypt.hashSync('password'),
    }
    return queryInterface.bulkInsert('Users', users //[
      //   {
      //     email: 'demo@user.io',
      //     firstName: 'Demo',
      //     lastName: 'User',
      //     birthDate: faker.date.between('2000-01-01', '2012-01-05'),
      //     hashedPassword: bcrypt.hashSync('password'),
      //   },
      //   {
      //     email: faker.internet.email(),
      //     firstName: faker.name.firstName(),
      //     lastName: faker.name.lastName(),
      //     birthDate: faker.date.between('2000-01-01', '2012-01-05'),
      //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
      //   },
      //   {
      //     email: faker.internet.email(),
      //     firstName: faker.name.firstName(),
      //     lastName: faker.name.lastName(),
      //     birthDate: faker.date.between('2000-01-01', '2012-01-05'),
      //     hashedPassword: bcrypt.hashSync(faker.internet.password()),
      //   },
      // ]
      , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
