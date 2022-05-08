const { Location } = require('../models')

const GetLocation = async (req, res) => {
    try {
        const location = await Location.findAll()
        console.log(location)
        res.send(location)
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