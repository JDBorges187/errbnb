'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: { type: DataTypes.STRING(50), allowNull: false },
    isoCode: { type: DataTypes.STRING(2), allowNull: false },
    latitude: { type: DataTypes.FLOAT, allowNull: false },
    longitude: { type: DataTypes.FLOAT, allowNull: false }
  }, {});
  State.associate = function (models) {
    // associations can be defined here
    State.hasMany(models.City, { foreignKey: "stateId" })
    State.hasMany(models.Place, { foreignKey: "stateId" })
  };
  return State;
};