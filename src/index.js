require("dotenv").config()

const Express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')

var cors = require('cors')



const app = Express()
app.use(cors())

const host = process.env.DB_HOST
const DBport = process.env.DB_PORT 
const name = process.env.DB_NAME 
const user = process.env.DB_USER 
const password = process.env.DB_PASSWORD

const port = 5000


app.use(bodyParser.urlencoded({ extended: false }))
app.set('json spaces', 2)

userRoute(app)

app.get('/', (req, resp) => resp.send('======>Conectado!'))


app.listen(port, () => console.log('============>Api rodando na porta 5000'))



