const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

const User = sequelize.define('User', {
    name: Sequelize.TEXT,
    favoriteColor: {
        type: Sequelize.TEXT,
        defaultValue: 'green'
    },
    age: Sequelize.INTEGER,
    cash: Sequelize.INTEGER
}, {timestamps: false, tableName: 'Users'});


module.exports = User