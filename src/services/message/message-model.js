'use strict';

// message-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const message = sequelize.define('messages', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true,
    // classMethods: {
    //   associate() {
    //     //message.belongsTo(sequelize.models.channels);
    //     message.belongsTo(sequelize.models.users);
    //   }
    // }
  });


  message.sync();

  return message;
};
