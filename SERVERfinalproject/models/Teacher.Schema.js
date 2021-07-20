const { Schema } = require("mongoose")
const studentSchema = require('./Student.schema')

const teacherSchema = new Schema({

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

  teachingMaterials: [{ type: Schema.Types.ObjectId, ref: 'TeachingMaterial' }],

}, { timestamps: true })

module.exports = teacherSchema

