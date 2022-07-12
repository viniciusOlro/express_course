const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('hellomvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado.')
} catch(e) {
    console.log(e)
}

module.exports = sequelize