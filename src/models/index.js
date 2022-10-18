import sequelize from '../../src/config/_database'

const models = {
    cursos: require('./Models'),
    sequelize: sequelize
}

export default models