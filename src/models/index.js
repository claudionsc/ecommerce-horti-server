const sequelize = require('../../src/config/_database')

const models = {
    cursos: require('./Models'),
    sequelize: sequelize
}

module.exports = models