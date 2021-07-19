const { Schema, model } = require("mongoose")

const studentSchema = new Schema({

  userName: { type: String, required: true },

  password: { type: String, required: true },

  name: { type: String, required: true },

  lastName: { type: String, required: true },

  age: { type: Number, required: true },

  description: { type: String, required: true },

  course: { type: String, required: true },

  interests: { type: String }, 

  legalTutor: {

    name: { type: String, required: true },
    lastName: { type: String, required: true },
    personalId: { type: String, required: true }, 

  },

  teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],

  groupEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

  individualEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }]

})

const Student = model("Student", studentSchema)

module.exports = Student

