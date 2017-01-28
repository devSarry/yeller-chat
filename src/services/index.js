'use strict';
const message = require('./message');
const channel = require('./channel');
const authentication = require('./authentication');
const user = require('./user');

const path = require('path');
const fs = require('fs-extra');
const Sequelize = require('sequelize');

module.exports = function () {
    const app = this;

    fs.ensureDirSync(path.dirname(app.get('sqlite')));
    const sequelize = new Sequelize('feathers', null, null, {
        dialect: 'sqlite',
        storage: app.get('sqlite'),
        logging: true
    });


    app.set('sequelize', sequelize);

    app.configure(authentication);
    app.configure(user);
    app.configure(message);

    app.on('login' , function (data) {
        console.log('User logged in \n\n ')
        console.log(data)
    })

    // Setup relationships
    const models = sequelize.models;
    Object.keys(models)
        .map(name => models[name])
    .filter(model => model.associate)
    .forEach(model => model.associate(models));

    sequelize.sync();
    app.configure(channel);
};
