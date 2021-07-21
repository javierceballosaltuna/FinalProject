const { Schema } = require("mongoose")

const studentSchema = new Schema({

  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: true },
  course: { type: String, required: true },
  interests: { type: String }, 

  legalTutor: {
    tutorName: { type: String, required: true },
    tutorLastName: { type: String, required: true },
    personalId: { type: String, required: true },

  },

  teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],

  individualEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

  groupEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }]

  

}, { timestamps: true })

module.exports = studentSchema

