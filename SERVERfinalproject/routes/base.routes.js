const express = require('express')
const router = require("express").Router()


router.get("/", (req, res, next) => {
    res.send('tomamos el controllllllllllll')
});

module.exports = router