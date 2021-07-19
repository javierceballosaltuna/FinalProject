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

  subjects: {
    type: String,
    enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs'] //HAY QUE PONER TODAS LAS MATERIAS DISPONIBLES
  },

  sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }],

  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

})

const Student = model("Student", studentSchema)

module.exports = Student

