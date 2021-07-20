const User = require("../models/User.model");

const router = require("express").Router();



//RUTAS DE USUARIO

//PROFILE

router.get('/profile/:user_id', (req, res) => {

    User
    
        .findById(user_id)
        
    .then((response)=> res.render())

    res.send('perfil de usuario logeado')
})


//ADMIN PANEL

router.get('/admin', (req, res) => {

    res.send('panel de administrador', //{ colección de teachers, de students, de eventos y de materials }
    )

})

module.exports = router

