const Sequelize = require ("sequelize")
const sequelize = require ('../config/_database')


const FrutasModels = sequelize.define('Frutas', {
    genero: {
        type: Sequelize.STRING,
        required: true
    },
    nome: {
        type: Sequelize.STRING,
        required: true,
        unique: true
    },
    familia: {
        type: Sequelize.STRING,
        required: true
    },
    ordem: {
        type: Sequelize.STRING,
        required: true
    },
    imagem: {
        type: Sequelize.STRING(5000),
        required: true
    }
})

const init = async () => {
    await FrutasModels.sync()
}

init()


module.exports = FrutasModels

