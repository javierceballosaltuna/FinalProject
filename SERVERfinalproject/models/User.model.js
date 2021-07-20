const { Schema, model } = require("mongoose")
const teacherSchema = require('./Teacher.Schema')
const studentSchema = require('./Student.Schema')

const userSchema = new Schema({

    userName: { type: String, required: true },

    password: { type: String, required: true },

    teacherData:  [teacherSchema],

    studentData: [studentSchema],

    role: { type: String, enum: ['student', 'teacher', 'admin'] }

})

const User = model("User", userSchema)

module.exports = User