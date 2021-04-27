'use strict';
const csc = require('country-state-city').default
const { State } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    const allStates = await State.findAll();

    const cities = [];

    allStates.forEach(state => {
      let citiesInState = csc.getCitiesOfState('US', state.isoCode)
        .map(city => {
          const { name, latitude, longitude } = city;
          const newCity = { name, stateId: state.id, latitude, longitude }
          return newCity;
        })
      cities.push(...citiesInState);
    })

    return queryInterface.bulkInsert('Cities', cities, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
