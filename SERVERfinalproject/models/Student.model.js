const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const studentSchema = new Schema({
  userName: { type: String, required: true },

  password: { type: String, required: true },

  name: { type: String, required: true },

  lastName: { type: String, required: true },

  age: { type: Number, required: true },

  description: { type: String, required: true },

  course: { type: String, required: true },

  interests: { type: String }, //PARA NOTA

  legalTutor: {

    name: { type: String, required: true },
    lastName: { type: String, required: true },
    personalId: { type: String, required: true }, //por la letra del DNI ha de ser String

    // no sé si nos deberiamos complicar mucho de momento aquí, lo vemos ahora
  },

  subjects: {
    type: String,
    enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs'] //HAY QUE PONER TODAS LAS MATERIAS DISPONIBLES
  },

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


});

const Student = model("Student", studentSchema);

module.exports = Student;


// const { Schema, model } = require('mongoose');

// const petSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },

//   description: {
//     type: String,
//   },

//   species: {
//     type: String,
//     required: true,
//   },

//   address: {
//     street: { type: String, required: true },
//     postal: { type: String, required: true },
//     number: { type: Number, required: true },
//     country: { type: String, required: true, default: 'SPAIN' },
//     city: { type: String, required: true },
//     location: {
//       type: {
//         type: String,
//       },
//       coordinates: [Number],
//     },
//   },

//   age: {
//     type: Number,
//     required: true,
//   },

//   profile_img: {
//     type: String,
//     required: true,
//   },

//   gender: {
//     type: String,
//     enum: ['MALE', 'FEMALE', 'UNDEFINED'],
//     default: 'UNDEFINED',
//   },

//   reviews: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Review',
//     },
//   ],

//   messages: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Message',
//     },
//   ],

//   friends: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Pet',
//     },
//   ],
// });

// petSchema.index({ location: '2dsphere' });

// const Pet = model('Pet', petSchema);

// module.exports = Pet;