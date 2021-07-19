
require('dotenv/config')
require('./db')

const express = require("express");
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require("./config/cors.config")(app);
require("./config/session.config")(app);

// default value for title local
const projectName = "finalproject";

require('./routes')(app)

module.exports = app;
