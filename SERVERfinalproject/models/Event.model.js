const { Schema, model } = require("mongoose")

const eventSchema = new Schema({

    location: { type: { type: String }, coordinates: [Number] },

    date: { type: Date, required: true },

    description: {
        type: String,
        // required: true
    },

    eventType: { type: String, enum: ['individual', 'group'] },

    teachingMaterials: [{ type: Schema.Types.ObjectId, ref: 'TeachingMaterial' }]

}, { timestamps: true })

const Event = model("Event", eventSchema)

module.exports = Event