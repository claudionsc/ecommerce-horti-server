require("dotenv").config()

const Express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')

var cors = require('cors')
const app = Express()
app.use(cors())

const database = process.env.DATABASE_URL
module.exports = database

const port = process.env.PORT || 5000
// const port = 5000

app.set('json spaces', 2)
app.use(bodyParser.urlencoded({ extended: false }))

userRoute(app)

app.get('/', (req, res) => res.send('======>Conectado!'))
app.listen(port, () => console.log('============>Api rodando na nuvem'))



