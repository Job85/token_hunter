const { Wallet } = require('../models')
const { post } = require('../routes/WalletRouter')

const GetWallet = async (req, res) => {
    try {
        const wallet = await Wallet.findAll()
        console.log(wallet)
        res.send(wallet)
    } catch (error) {
        throw error
    }
}

const CreateWallet = async (req, res) => {
    try {
        const post = await post.create({ ...req.body })
        console.log(post)
        res.send(post)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetWallet,
    CreateWallet
}