const { Schema, model } = require("mongoose")

const eventSchema = new Schema({

    location: {
        type: { type: String },
        coordinates: [Number],
        address: {
            street: { type: String },
            zipCode: { type: String },
            city: { type: String },
            country: { type: String }
        }
    },

    date: { type: Date, required: [true, 'Date required'] },

    description: { type: String, required: [true, 'Description required'] },

    isActive: { type: Boolean, default: true },

    eventType: { type: String, enum: ['individual', 'group'] },

    teachingMaterials: [{ type: Schema.Types.ObjectId, ref: 'TeachingMaterial' }]

}, { timestamps: true })


const Event = model("Event", eventSchema)

module.exports = Event