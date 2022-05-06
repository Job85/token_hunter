const { Location } = require('../models')

const GetLocation = async (req, res) => {
    try {
        const locale = await Location.findAll()
        console.log(locale)
        res.send(locale)
    } catch (error) {
        throw (error)
    }
}

module.eports = {
    GetLocation
}