'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    title: {
      allowNull: false,
      type: Sequelize.STRING(100),
      validate: {
        len: [4, 100],
        notNull: {
          msg: "Please include a title not to exceed 100 characters"
        },
      },
    },
    price: {
      allowNull: false,
      type: Sequelize.DECIMAL(10,2),
      notNull: {
        msg: "Please provide a valid price per night"
      },
    },
    bedrooms: {
      allowNull: false,
      type: Sequelize.INTEGER,
      validate: {
        isInt: {
          msg: "Please provide a valid number of bedrooms"
        }
      }
    },
    bathrooms: {
      allowNull: false,
      type: Sequelize.INTEGER,
      validate: {
        isInt: {
          msg: "Please provide a valid number of bathrooms"
        }
      }
    },
    beds: {
      allowNull: false,
      type: Sequelize.INTEGER,
      validate: {
        isInt: {
          msg: "Please provide a valid number of beds"
        }
      }
    },
    spaceTypeId: {
      allowNull: false,
      type: Sequelize.INTEGER, //TODO: Validations?
    },
    amenities: {
      type: Sequelize.STRING(100) //TODO: Validations?
    },
    spotPhotos: {
      allowNull: false,
      type: Sequelize.STRING(255) //TODO: Validations?
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
      validate: {
        notNull: {
          msg: "Please provide a description for your place."
        },
      }
    },
    cityId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    stateId: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
  };
  return Place;
};