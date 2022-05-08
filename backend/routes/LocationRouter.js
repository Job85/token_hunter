const Router = require('express').Router()
const controller = require('../controllers/LocationController')

Router.get('/', controller.GetLocation)
Router.post('/', controller.CreateLocation)

module.exports = Router