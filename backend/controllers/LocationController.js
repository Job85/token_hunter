const { Location } = require('../models')

const GetLocation = async (req, res) => {
    try {
        const banana = await Location.findAll()
        console.log(banana)
        res.send(banana)
    } catch (error) {
        throw error
    }
}

const CreateLocation = async (req, res) => {
    const userId = parseInt(req.params.userId)
    try {
        let coords = {
            userId,
            ...req.body
        }
        const createLocation = await Location.create(coords)
        console.log(createLocation)
        res.send(createLocation)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetLocation,
    CreateLocation
}