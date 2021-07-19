const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const teacherSchema = new Schema({

  userName: { type: String, required: true },

  password: { type: String, required: true },

  name: { type: String, required: true },

  lastName: { type: String, required: true },

  age: { type: Number, required: true },

  description: { type: String, required: true },

  avatar: { type: String, required: true },

  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  ],

  subject: [{
    type: String,
    enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs']
  }
  ],

  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Session'
    }
  ],

  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ],

  teachingMaterials: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TeachingMaterial'
    }
  ],



});

const Teacher = model("Teacher", teacherSchema);

module.exports = Teacher;

