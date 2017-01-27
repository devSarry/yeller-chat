'use strict';

// user-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const user = sequelize.define('users', {
    github_id: {
      type: Sequelize.STRING,
      allowNull: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    online: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  }, {
    freezeTableName: true,
    classMethods: {
      associate() {
        //user.belongsToMany(sequelize.models.channel, { through: 'UserChannels', foreignKey: 'userId', otherKey: 'channelId' });
        user.hasMany(sequelize.models.messages)
      }
    }
});

  user.sync();


  return user;
};
