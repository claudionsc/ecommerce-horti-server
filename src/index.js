import Express from 'express'
import bodyParser from 'body-parser'
import database from "./config/database";
import userRoute from './routes/userRoute'
import cors from 'cors'


const app = Express()
app.use(cors())

const host = process.env.DB_HOST
const DBport = process.env.DB_PORT 
const name = process.env.DB_NAME 
const user = process.env.DB_USER 
const password = process.env.DB_PASSWORD

const port = process.env.DB_PORT || 5000




app.use(bodyParser.urlencoded({ extended: false }))
app.set('json spaces', 2)

userRoute(app)

app.get('/', (req, resp) => resp.send('======>Conectado!'))

database.connect().then(() => {
    app.listen(port, () => console.log('============>Api rodando na porta 500'))
})


