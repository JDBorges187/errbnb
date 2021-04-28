'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const placeTypes = [
      { name: "Apartment", arrangement: "Entire place" },
      { name: "Condominium", arrangement: "Entire place" },
      { name: "Loft", arrangement: "Entire place" },
      { name: "House", arrangement: "Entire place" },
      { name: "Villa", arrangement: "Entire place" },
      { name: "Townhouse", arrangement: "Entire place" },
      { name: "Cottage", arrangement: "Entire place" },
      { name: "Cabin", arrangement: "Entire place" },
      { name: "Apartment", arrangement: "Private room" },
      { name: "Condominium", arrangement: "Private room" },
      { name: "Loft", arrangement: "Private room" },
      { name: "House", arrangement: "Private room" },
      { name: "Villa", arrangement: "Private room" },
      { name: "Townhouse", arrangement: "Private room" },
      { name: "Cottage", arrangement: "Private room" },
      { name: "Cabin", arrangement: "Private room" },
    ]

    return queryInterface.bulkInsert('PlaceTypes', placeTypes, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('PlaceTypes', null, {});
  }
};
