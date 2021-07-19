const { Schema, model } = require("mongoose")

const teachingMaterialSchema = new Schema({

    name: { type: String, required: true },

    url: { type: String, required: true },

    description: { type: String, required: true },

    subject: {
        type: String,
        enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs'] //HAY QUE PONER TODAS LAS MATERIAS DISPONIBLES
    }

})

const TeachingMaterial = model("TeachingMaterial", teachingMaterialSchema)

module.exports = TeachingMaterial