require('dotenv').config()


const Sequelize = require('sequelize')

// VARIÁVEIS DE CONEXÃO

const sequelize = new Sequelize(
  process.env.DATABASE_URL, 
  {
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true

      },
    }
  })

  console.log('Connected to PlanetScale!');


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