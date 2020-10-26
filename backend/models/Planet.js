const { Schema, model } = require('mongoose')

const PlanetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    radius: {
        type: Number,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
})

const Planet = model('planet', PlanetSchema)

module.exports = Planet