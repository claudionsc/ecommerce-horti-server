const Models = require('../models/FrutasModels')
const Express = require('express')
const cors = require('cors')



const app = Express()


app.use(cors())


const userRoute = (app) => {

    app.route('/frutas/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                const fruta = await Models.findByPk(id)

                if (!id || fruta === null) {
                   return res.status(400).send({ error: 'Falha ao encontrar fruta' })
        
                } else {
                    return res.json(fruta)
                }
            }

            try {
                const frutas = await Models.findAll(query)
                res.send({ frutas })

            } catch (error){
               return res.status(400).send({ error: 'Falha ao encontrar fruta'})
            }
        })
        
}

module.exports = userRoute