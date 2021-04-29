'use strict';
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path')


const { User, State, City, PlaceType } = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // let florida = await State.findOne({
    //   where: {
    //     isoCode: 'FL'
    //   }
    // })


    // console.log("State ID:", florida.id)


    // // console.log(floridaCities)

    // let users = await User.findAll();

    // let arr = [];
    // let count = 0;

    // var placesPath = path.join(__dirname, '..', '..', 'data', 'places.csv')

    // fs.createReadStream(placesPath)
    //   .pipe(csv())
    //   .on('data', (row) => {
    //     row.userId = users[count].id;
    //     count++
    //     row.stateId = florida.id;
    //     delete row.state;
    //     arr.push(row);
    //   })
    //   .on('end', () => {
    //     // console.log(arr);
    //   });

    // let floridaCities = await City.findAll({
    //   attributes: ['id', 'name'],
    //   where: {
    //     stateId: florida.id
    //   }
    // })

    // arr.map(place => {
    //   const newObj = { ...place }
    //   const foundCity = floridaCities.find(({ name }) => name === newObj.city)
    //   if (foundCity) {
    //     const foundCityId = foundCity.id;
    //     newObj.cityId = foundCityId;
    //     delete newObj.city;
    //   }
    //   return newObj;
    // })

    // console.log(arr)

    const places = [{
      userId: 121,
      title: 'CITYPLACE SOUTH TOWER CONDO',
      price: '185',
      bedrooms: '1',
      bathrooms: '1',
      beds: '1',
      placeTypeId: '18',
      spotPhotos: 'http://cdn.photos.sparkplatform.com/fl/20210427141416763335000000-o.jpg',
      description: "Water, basic cable, Internet and trash removal included in rent. Gorgeous 1 bedroom, 1 bathroom on the 17th floor of City Place South Tower with amazing city and Clear Lake views. Building amenities include fully equipped spa and fitness center with sauna, 9th floor club deck with a resort-style pool, grill, outdoor party room, Wi-Fi access throughout, party lounge including billiard area, catering kitchen, video gaming center, and large flat screen TV's. The building is located in the center of a vibrant community known for its local art scene, world-class performing arts, internationally renowned restaurants and shops, and pristine waterways.",
      address: '550 Okeechobee Boulevard #1721',
      latitude: '26.705047',
      longitude: '-80.056274',
      cityId: '23270',
      stateId: '68'
    }
    ]

    return queryInterface.bulkInsert('Places', places, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Places', null, {});
  }
};
