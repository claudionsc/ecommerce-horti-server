import sequelize from '../config/database'

const models = {
    cursos: require('./Models'),
    sequelize: sequelize
}

export default models