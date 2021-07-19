const express = require("express")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
<<<<<<< HEAD
const favicon = require("serve-favicon")

const path = require("path")

module.exports = (app) => {
  app.use(logger("dev"))

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cookieParser())
}
=======

module.exports = (app) => {
  app.use(logger("dev"))

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
}
>>>>>>> 94b26848fd8fa4886e524217505717d8840ff95a
