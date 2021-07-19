const { Schema, model } = require("mongoose")

const eventSchema = new Schema({

    location: { type: { type: String }, coordinates: [Number] },

    date: { type: Date, required: true },

    avatar: { type: String, required: true },

    description: { type: String, required: true },

    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],

    teachingMaterials: [{ type: Schema.Types.ObjectId, ref: 'TeachingMaterial' }],
})

const Event = model("Event", eventSchema)

module.exports = Event