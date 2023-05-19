const Sequelize = require ("sequelize")
const sequelize = require ('../config/_database')


const FrutasModels = sequelize.define('Frutas', {
    genero: {
        type: Sequelize.STRING,
         allowNull: false,
        required: true
    },
    nome: {
        type: Sequelize.STRING,
         allowNull: false,
        required: true,
        unique: true
    },
    familia: {
        type: Sequelize.STRING,
         allowNull: false,
        required: true
    },
    ordem: {
        type: Sequelize.STRING,
         allowNull: false,
        required: true
    },
    imagem: {
        type: Sequelize.STRING(5000),
         allowNull: false,
        required: true
    }
})

const init = async () => {
    await FrutasModels.sync()
}

init()


module.exports = FrutasModels

