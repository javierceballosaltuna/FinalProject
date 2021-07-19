const { Schema, model } = require("mongoose")

const sessionSchema = new Schema({

    location: { type: { type: String }, coordinates: [Number] },

    date: { type: Date, required: true },

    avatar: { type: String, required: true },

    description: { type: String, required: true },

    student: { type: Schema.Types.ObjectId, ref: 'Student' },

    subjects: {
        type: String,
        enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs'] //HAY QUE PONER TODAS LAS MATERIAS DISPONIBLES
    }
})

const Session = model("Session", sessionSchema)

module.exports = Session