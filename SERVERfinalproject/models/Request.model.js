const { Schema, model } = require("mongoose")


const requestSchema = new Schema({

    student: { type: Schema.Types.ObjectId, ref: 'User' },
    teacher: { type: Schema.Types.ObjectId, ref: 'User' },
    isAccepted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    comment: { type: String, required: true }

}, { timestamps: true })

const Request = model("Request", requestSchema)

module.exports = Request