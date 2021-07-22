const { Schema, model } = require("mongoose")
const teacherSchema = require('./Teacher.schema')
const studentSchema = require('./Student.schema')

const userSchema = new Schema({

    userName: { type: String, required: true },

    password: { type: String, required: true },

    teacherData:  teacherSchema,
    
    studentData: studentSchema,
    
    role: { type: String, enum: ['student', 'teacher', 'admin'] }

}, { timestamps: true })


const User = model("User", userSchema)

module.exports = User