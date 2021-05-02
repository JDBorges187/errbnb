'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(100),
      validate: {
        len: [4, 100],
        notNull: {
          msg: "Please include a title not to exceed 100 characters"
        },
      },
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
      notNull: {
        msg: "Please provide a valid price per night"
      },
    },
    bedrooms: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "Please provide a valid number of bedrooms"
        }
      }
    },
    bathrooms: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "Please provide a valid number of bathrooms"
        }
      }
    },
    beds: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: "Please provide a valid number of beds"
        }
      }
    },
    // placeTypeId: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER, //TODO: Validations?
    // },
    // amenities: {
    //   type: DataTypes.STRING(100) //TODO: Validations?
    // },
    spotPhotos: {
      allowNull: false,
      type: DataTypes.STRING(255) //TODO: Validations?
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notNull: {
          msg: "Please provide a description for your place."
        },
      }
    },
    cityId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    stateId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {});
  Place.associate = function (models) {
    // associations can be defined here
    Place.belongsTo(models.State, { foreignKey: "stateId" })
    Place.belongsTo(models.City, { foreignKey: "cityId" })
    // Place.belongsTo(models.PlaceType, {foreignKey: "placeTypeId"})
  };
  return Place;
};