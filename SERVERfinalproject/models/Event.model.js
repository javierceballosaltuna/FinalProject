const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const eventSchema = new Schema({

    location: {
        type: {
            type: String,
        },
        coordinates: [Number]
    },

    date: { type: Date, required: true },

    avatar: { type: String, required: true },

    description: { type: String, required: true },

    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        }
    ],

    subjects: {
        type: String,
        enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs'] //HAY QUE PONER TODAS LAS MATERIAS DISPONIBLES
    },

    teachingMaterials: [ //POR CONFIRMAR
        {
            type: Schema.Types.ObjectId,
            ref: 'TeachingMaterial'
        }
    ],
});

const Event = model("Event", eventSchema);

module.exports = Event;