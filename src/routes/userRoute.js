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
                query.id = id
            }

            try {
                const frutas = await Models.findAll(query)
                res.send({ frutas })

            } catch (error){
                res.status(400).send({ error: 'Falha ao encontrar fruta'})
            }
        })
        .post(async (req, res) => {
            try {
                const frutas = new Models(req.body)
                await frutas.save()

                res.status(201).send('POST')
            }catch(error){
                res.send(error)
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if(!id) {
                return res.status(400).send({ error: 'ID não encontrado'})
            }
            try {
                const updateFruta = await Models.findOneAndUpdate({ _id: id }, req.body, {
                    new: true,
                });

                console.log(updateFruta)

                if(updateFruta) {
                    return res.status(200).send('OK!')
                }

                res.status(400).send({ error: 'Não é possível atualizar a fruta'})

            } catch (error) {
                res.send(error)
            }
            })
            .delete(async (req, res) => {
            const id = req.params.id

            if(!id) {
                    return res.status(400).send({ error: 'ID não encontrado'})
            }

            try {
                const deleteFruta = await Models.deleteOne({ _id: id })
                if (deleteFruta.deletedCount) {
                    return res.send('Deletado')

                }

                res.status(400).send({ error: 'Não foi possível deletar fruta' })

            } catch (error) {
                res.send(error)
            }
    })
}

module.exports = userRoute