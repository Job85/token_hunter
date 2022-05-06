const Router = require('express').Router()
const controller = require('../controller/TokenController')

Router.get('/', controller.GetToken)

module.exports = Router