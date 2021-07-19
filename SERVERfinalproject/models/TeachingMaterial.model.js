const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const teachingMaterialSchema = new Schema({


    name: { type: String, required: true },

    description: { type: String, required: true },

    subject: {
        type: String,
        enum: ['spanish', 'math', 'science', 'history', 'music', 'english', 'art', 'physical education', 'special needs'] //HAY QUE PONER TODAS LAS MATERIAS DISPONIBLES
    }


});

const TeachingMaterial = model("TeachingMaterial", teachingMaterialSchema);

module.exports = TeachingMaterial;