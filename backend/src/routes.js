const express = require('express')

const Ong = require('./controllers/Ong')
const Incident = require('./controllers/Incident')
const Profile = require('./controllers/Profile')
const Session =require('./controllers/Session')

const routes = express.Router()

routes.get('/ongs', Ong.index)
routes.post('/ongs', Ong.store)

routes.post('/incidents', Incident.store)
routes.get('/incidents', Incident.index)
routes.delete('/incidents/:id', Incident.destroy)

routes.get('/profile', Profile.index)

routes.post('/sessions', Session.store)

module.exports = routes