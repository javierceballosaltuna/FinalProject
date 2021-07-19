const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const adminSchema = new Schema({

    userName: { type: String, required: true },

    password: { type: String, required: true },

});

const Admin = model("Admin", adminSchema);

module.exports = Admin;
