const { Schema, model } = require("mongoose")
const teacherSchema = require('./Teacher.schema')
const studentSchema = require('./Student.schema')

const userSchema = new Schema({

    userName: { type: String, required: [true, 'Username required'], unique: true },

    password: { type: String, required: [true, 'Password required'] },
    
    email: {
        type: String,
        required: [true, 'Please, add your email to continue'],
        validate: {
            validator: function (email) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            },
            message: props => `${props.value} is not a valid email`
        }
    },

    teacherData:  teacherSchema,
    
    studentData: studentSchema,
    
    role: { type: String, enum: ['student', 'teacher', 'admin'], required: [true, 'Role required'] }

}, { timestamps: true })


const User = model("User", userSchema)
module.exports = User