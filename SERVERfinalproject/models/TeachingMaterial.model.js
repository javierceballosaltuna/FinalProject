const { Schema, model } = require("mongoose")

const teachingMaterialSchema = new Schema({

    name: { type: String, required: true },

    url: { type: String, required: true },

    description: { type: String, required: true },

    subject: {
        type: String,
        enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs'] 
    }

}, { timestamps: true })


const TeachingMaterial = model("TeachingMaterial", teachingMaterialSchema)

module.exports = TeachingMaterial