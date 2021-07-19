const { Schema, model } = require("mongoose")

const eventSchema = new Schema({

    location: { type: { type: String }, coordinates: [Number] },

    date: { type: Date, required: true },

    avatar: { type: String, required: true },

    description: { type: String, required: true },

    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],

    subjects: {
        type: String,
        enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs'] //HAY QUE PONER TODAS LAS MATERIAS DISPONIBLES
    },

    teachingMaterials: [{ type: Schema.Types.ObjectId, ref: 'TeachingMaterial' }],
})

const Event = model("Event", eventSchema)

module.exports = Event