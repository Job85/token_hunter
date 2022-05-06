const Router = require('express').Router()
const TokenRouter = require('./TokenRouter')

Router.use('/token', TokenRouter)

module.exports = Router