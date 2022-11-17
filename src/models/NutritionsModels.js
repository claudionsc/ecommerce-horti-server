const Sequelize = require ("sequelize")
const sequelize = require ('../config/_database')


const NutritionsModels = sequelize.define('Nutritions', {
   
        carboidratos: {
            type: Sequelize.INTEGER,
            required: true
        },
        proteina:{
            type: Sequelize.INTEGER,
            required: true
        },
        gordura: {
            type: Sequelize.INTEGER,
            required: true
        },
        calorias: {
            type: Sequelize.INTEGER,
            required: true
        },
        acucar:{
            type: Sequelize.INTEGER,
            required: true
        }
    },

)

const init = async () => {
    await NutritionsModels.sync()
}

init()


module.exports = NutritionsModels

const FrutasModels = require('./FrutasModels')
NutritionsModels.belongsToMany(FrutasModels, {through: 'frutas_nutritions'})
