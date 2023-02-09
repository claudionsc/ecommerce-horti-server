const Sequelize = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'postgres',
  port: '5432',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  logging: true,
  define: {
  timestaps: true,
  underscored: true,

}},
)

module.exports = sequelize

// Test DB Conenction //
async function test() {
  try {
    let result = await sequelize.authenticate()
    console.log("--->SUCESSO<---")
  }
  catch (error) {
    console.error("------->FALHA: ")
    console.error(error)
    process.exit()
  }
}

test()