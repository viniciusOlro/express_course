const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('hellosequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize