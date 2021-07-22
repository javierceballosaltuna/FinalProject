const { Schema } = require("mongoose")

const studentSchema = new Schema({

  name: { type: String, required: [true, 'Name required'] },
  
  lastName: { type: String, required: [true, 'lastName required'] },
  
  age: { type: Number, required: [true, 'Age required'] },
  
  description: { type: String, required: [true, 'Description required'] },
  
  course: { type: String, required: [true, 'Course required'] },
  
  interests: { type: String }, 

  legalTutor: {
    tutorName: { type: String, required: [true, 'Tutor Name required'] },
    tutorLastName: { type: String, required: [true, 'Tutor Last Name required'] },
    personalId: { type: String, required: [true, 'Tutor Personal ID required'] }
  },

  teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],

  individualEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

  groupEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }]

}, { timestamps: true })


module.exports = studentSchema

