const User = require("../models/User.model");

const router = require("express").Router();


//FALTA LÓGICA DEL FILTRO

//SUBJECTS , LISTADO DE PROFESORES DISPONIBLES EN LA PLATAFORMA

router.get('/subjects', (req, res) => {

    User
        .find({"role": "teacher"})
        .then((response) => { res.json(response) })
        .catch(err => console.log(err))

    res.send('listado de materias/profesores disponibles', //{ colección de clases/ profesores}
    )
})