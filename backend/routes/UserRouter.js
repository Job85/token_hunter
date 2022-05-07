const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUser)
Router.post('/', controller.CreateUser)

module.exports = Router