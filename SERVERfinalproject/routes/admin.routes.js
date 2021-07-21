const User = require("../models/User.model");

const router = require("express").Router();


//ADMIN PANEL

router.get('/', (req, res) => {

    res.send('panel de administrador', //{ colección de teachers, de students, de eventos y de materials }
    )

})

module.exports = router

