const { Schema } = require("mongoose")
const studentSchema = require('./Student.schema')

const teacherSchema = new Schema({

  name: { type: String, required: [true, 'Name required'] },

  lastName: { type: String, required: [true, 'Last Name required'] },

  age: { type: Number, required: [true, 'Age required'] },

  description: { type: String, required: [true, 'Description required'] },

  avatar: { type: String, required: [true, 'Avatar required'] },

  subject: [{
    type: String,
    enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs']
  }],

  groupEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

  individualEvent: [{ type: Schema.Types.ObjectId, ref: 'Event' }],

  teachingMaterials: [{ type: Schema.Types.ObjectId, ref: 'TeachingMaterial' }]

}, { timestamps: true })


module.exports = teacherSchema

