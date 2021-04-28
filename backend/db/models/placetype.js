'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaceType = sequelize.define('PlaceType', {
    name: { type: DataTypes.STRING(50), allowNull: false },
    arrangement: { type: DataTypes.STRING(50), allowNull: false },
  }, {});
  PlaceType.associate = function(models) {
    // associations can be defined here
  };
  return PlaceType;
};