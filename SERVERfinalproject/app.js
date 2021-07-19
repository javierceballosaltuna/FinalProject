require("dotenv/config")

require("./db")

const express = require("express")
const app = express()

require("./config")(app)
require("./config/session.config")(app)

const projectName = "finalproject"

require('./routes')(app)

module.exports = app
