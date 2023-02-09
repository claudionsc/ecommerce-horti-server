const sequelize = require('../../src/config/_database')

const models = {
    frutas: require('./FrutasModels'),
    sequelize: sequelize
}

module.exports = models