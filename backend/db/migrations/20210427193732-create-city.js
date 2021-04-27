'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      stateId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "States",
          key: "id",
        },
      },
      latitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      longitude: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    },{
      indexes: [{
        unique:true,
        fields: ['name', 'stateId']
      }],
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cities');
  }
};