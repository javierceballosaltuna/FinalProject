const router = require("express").Router();


//RUTAS DE USUARIO

//PROFILE

router.get('/profile/:user_id', (req, res) => {



    res.send('perfil de usuario logeado')
})

//SUBJECTS
router.get('/subjects', (req, res) => {

    res.send('listado de materias/profesores disponibles', //{ colección de clases/ profesores}
    )
})


//EVENTS
router.get('/events', (req, res) => {

    res.send('listado de eventos', //{ colección de eventos disponibles }
    )
})

//MATERIALS

router.get('/teachingmaterials', (req, res) => {

    res.send('listado de materiales', //{ colección de materiales públicos }
    )
})

//ADMIN PANEL

router.get('/admin', (req, res) => {

    res.send('panel de administrador', //{ colección de teachers, de students, de eventos y de materials }
    )

})

module.exports = router

