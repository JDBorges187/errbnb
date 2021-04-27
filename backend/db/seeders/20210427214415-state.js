'use strict';
const csc = require('country-state-city').default



module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
    const states = csc.getStatesOfCountry('US')
      .filter(state => state.isoCode.length === 2)
      .map(state => {
        delete state['countryCode']
        return state;
      })
    return queryInterface.bulkInsert('States', states, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('States', null, {});
  }
};
