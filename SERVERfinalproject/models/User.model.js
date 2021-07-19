const { Schema, model } = require("mongoose")
const Teacher = require('./Teacher.model')
const Student = require('./Student.model')

const userSchema = new Schema({

    userName: { type: String, required: true },

    password: { type: String, required: true },

    isTeacher: { Teacher },

    isStudent: { Student },

    role: { type: String, enum: ['student', 'teacher', 'admin']}

})

const User = model("Admin", userSchema)

module.exports = User