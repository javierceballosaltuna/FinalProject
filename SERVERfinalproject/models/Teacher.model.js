const { Schema, model } = require("mongoose")

const teacherSchema = new Schema({

  userName: { type: String, required: true },

  password: { type: String, required: true },

  name: { type: String, required: true },

  lastName: { type: String, required: true },

  age: { type: Number, required: true },

  description: { type: String, required: true },

  avatar: { type: String, required: true },

  subject: [{
    type: String,
    enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs']
  }],

  groupEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

  individualEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

  teachingMaterials: [{ type: Schema.Types.ObjectId, ref: 'TeachingMaterial' }]

})

const Teacher = model("Teacher", teacherSchema)

module.exports = Teacher

