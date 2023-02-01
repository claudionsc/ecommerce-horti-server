const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


const Express = require('express')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute')

var cors = require('cors')



const app = Express()
app.use(cors())



const port = 5000
// const port = process.env.DB_PORT || 5000


app.use(bodyParser.urlencoded({ extended: false }))
app.set('json spaces', 2)

userRoute(app)

app.get('/', (req, resp) => resp.send('======>Conectado!'))


app.listen(port, () => console.log('============>Api rodando na porta 5000'))



