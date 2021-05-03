'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    placeId: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.INTEGER, allowNull: false},
    startDate: {type: DataTypes.DATE, allowNull: false},
    endDate: {type: DataTypes.DATE, allowNull: false},
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, {foreignKey: "userId"})
    Booking.belongsTo(model.Place, {foreignKey: "placeId"})
  };
  return Booking;
};