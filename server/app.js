require('dotenv/config')
require('./db')

const express = require("express")
const app = express()


require("./config/cors.config")(app)
require("./config")(app)
require("./config/session.config")(app)


require('./routes')(app)
// require('./config/cron.config')

module.exports = app