const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const Sequelize = require('sequelize')

const dbPort = process.env.DB_PORT

// const sequelize = new Sequelize(
//   process.env.DATABASE_URL, 

//   {
//     port: dbPort,
//     dialectOptions: {
//       ssl: {
//         required: true,
//         rejectUnauthorized: true

//       },
//     }
//   })

const uri = 'postgres://localhost:5432/horti'
const sequelize = new Sequelize(

  
  {
    host: 'localhost',
    database: 'horti',
    username: 'postgres',
    password: 'admin',
    dialect: 'postgres',
    port: 5441,
    logging: true
  })

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