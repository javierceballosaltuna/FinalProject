const { Schema, model } = require("mongoose")


const requestSchema = new Schema({
    
    student: { ref: "User" },
    teacher: { ref: "User" },
    isAccepted: Boolean,
    isActive: Boolean,
    comment: { type: String, required: true }

}, { timestamps: true })

const Request = model("Request", requestSchema)

module.exports = Request