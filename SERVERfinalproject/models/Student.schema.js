const { Schema } = require("mongoose")

const studentSchema = new Schema({

  name: { type: String, required: true },

  lastName: { type: String, required: true },

  age: { type: Number, required: true },

  description: { type: String, required: true },

  // course: { type: String, required: true },

  // interests: { type: String }, 

  legalTutor: {

    name: { type: String, required: true },
    lastName: { type: String, required: true },
    personalId: { type: String, required: true }, 

  },

  // teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],

  // sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }],

  // events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

})

module.exports = studentSchema

