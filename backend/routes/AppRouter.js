const Router = require('express').Router()
const TokenRouter = require('./TokenRouter')
const LocationRouter = require('./LocationRouter')

Router.use('/token', TokenRouter)
Router.use('/location', LocationRouter)

module.exports = Router