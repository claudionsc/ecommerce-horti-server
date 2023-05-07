require('dotenv').config()


const Sequelize = require('sequelize')

// VARIÁVEIS DE CONEXÃO

const sequelize = new Sequelize(
  process.env.DATABASE_URL, 
  {
    dialect: "mysql",
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,

    dialectOptions: {
      ssl: {
        required: true,
        rejectUnauthorized: false,

      },
    }
  })

  console.log('Connected to Railway!')


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