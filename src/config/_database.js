require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  process.env.DATABASE_URL, 
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true

      },
    }
  })

console.log('Conectado!')

module.exports = sequelize

// Test DB Conenction //
async function test(){
    try{
        let result = await sequelize.authenticate()
        console.log("--->SUCESSO<---")
    }
    catch(error){
        console.error("------->FALHA: ")
        console.error(error)
        process.exit()
    }
  }