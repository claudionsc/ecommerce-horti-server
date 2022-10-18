import Express from 'express'
import bodyParser from 'body-parser'
// import database from "./config/_database";
import userRoute from './routes/userRoute'
// import 'dotenv/config.js'
import cors from 'cors'
import { config } from "dotenv";
        config({ path: process.ENV })


const app = Express()
app.use(cors())

const host = process.env.DB_HOST
const DBport = process.env.DB_PORT 
const name = process.env.DB_NAME 
const user = process.env.DB_USER 
const password = process.env.DB_PASSWORD

const port = process.env.PORT || 5000


app.use(bodyParser.urlencoded({ extended: false }))
app.set('json spaces', 2)

userRoute(app)

app.get('/', (req, resp) => resp.send('======>Conectado!'))


app.listen(port, () => console.log('============>Api rodando na porta 5000'))



