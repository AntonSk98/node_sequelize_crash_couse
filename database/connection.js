const Sequelize = require('sequelize')
const config = require('../config/config.json')

const sequelize = new Sequelize(
    {
        dialect: config.development.dialect,
        database: config.development.database,
        username: config.development.username,
        password: config.development.password,
        host: config.development.host
    }
)

module.exports = sequelize;
