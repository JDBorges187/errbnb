'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: { type: DataTypes.STRING(50), allowNull: false },
    stateId: { type: DataTypes.INTEGER, allowNull: false },
    latitude: { type: DataTypes.FLOAT, allowNull: false },
    longitude: { type: DataTypes.FLOAT, allowNull: false }
  }, {});
  City.associate = function (models) {
    // associations can be defined here
    City.belongsTo(models.State, {foreignKey: "stateId"})
    City.hasMany(models.Place, {foreignKey: "cityId"})
  };
  return City;
};