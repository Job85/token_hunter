const Router = require('express').Router()
const TokenRouter = require('./TokenRouter')
const LocationRouter = require('./LocationRouter')
const WalletRouter = require('./WalletRouter')
const UserRouter = require('./UserRouter')

Router.use('/token', TokenRouter)
Router.use('/location', LocationRouter)
Router.use('/wallet', WalletRouter)
Router.use('/user', UserRouter)

module.exports = Router