const sequelize = require('../../src/config/_database')

const models = {
    frutas: require('./FrutasModels'),
    nutritions: require('./NutritionsModels'),
    sequelize: sequelize
}

module.exports = models