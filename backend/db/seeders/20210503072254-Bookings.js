'use strict';

const { User, Place } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */

      const demoUser = await User.findOne({
        where: {
          email: 'demo@user.io'
        }
      })

      const places = await Place.findAll({
        attributes: ['id']
      })

      let bookings =[]
      if (!places) {
        bookings = null;
      } else {
        bookings = [{
          userId: demoUser.id,
          placeId: places[0].id,
          startDate: new Date('2021-05-13'),
          endDate: new Date('2021-05-22')
        }]
      }

   return queryInterface.bulkInsert('Bookings', bookings, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
