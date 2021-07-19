const { Schema, model } = require("mongoose")

const sessionSchema = new Schema({

    location: { type: { type: String }, coordinates: [Number] },

    date: { type: Date, required: true },

    avatar: { type: String, required: true },

    description: { type: String, required: true },

    student: { type: Schema.Types.ObjectId, ref: 'Student' },

})

const Session = model("Session", sessionSchema)

module.exports = Session