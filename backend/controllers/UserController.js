const { User } = require('../models')
const { post } = require('../routes/WalletRouter')

const GetUser = async (req, res) => {
    try {
        const user = await User.findAll()
        console.log(user)
        res.send(user)
    } catch (error) {
        throw error
    }
}

const CreateUser = async (req, res) => {
    try {
        const post = await post.create({ ...req.body })
        console.log(post)
        res.send(post)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetUser,
    CreateUser
}