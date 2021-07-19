<<<<<<< HEAD
const router = require("express").Router()

router.get("/", (req, res, next) => {
    res.render("index")
})
=======
const express = require('express')
const router = require("express").Router();


/* GET home page */
router.get("/", (req, res, next) => {
    res.send('tomamos el controllllllllllll');
});
>>>>>>> 94b26848fd8fa4886e524217505717d8840ff95a

module.exports = router