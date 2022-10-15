import Sequelize from "sequelize"
import sequelize from '../config/database'


const Models = sequelize.define('Frutas', {
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
    nutritions: {
        carboidratos:{
            type: Sequelize.INTEGER,
            required: true
        },
        proteína:{
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
        açúcar:{
            type: Sequelize.INTEGER,
            required: true
        },
    }

})

const init = async () => {
    await Models.sync()
}

init()


export default Models