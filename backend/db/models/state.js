'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: { type: DataTypes.STRING(50), allowNull: false },
    abbr: { type: DataTypes.STRING(2), allowNull: false },
    lat: { type: DataTypes.FLOAT, allowNull: false },
    long: { type: DataTypes.FLOAT, allowNull: false }
  }, {});
  State.associate = function (models) {
    // associations can be defined here
    State.hasMany(models.City, { foreignKey: "stateId" })
  };
  return State;
};