const Router = require('express').Router()
const controller = require('../controllers/WalletController')

Router.get('/', controller.GetWallet)
Router.post('/', controller.PostWallet)

module.exports = Router