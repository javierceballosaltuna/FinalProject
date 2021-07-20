const User = require("../models/User.model");
const Request = require("../models/Request.model")
const Event = require("../models/Event.model")
const router = require("express").Router();


//FALTA LÓGICA DEL FILTRO

//SUBJECTS , LISTADO DE PROFESORES DISPONIBLES EN LA PLATAFORMA

router.get('/subjects', (req, res) => {

    console.log('entra en la ruta)')
    User
        .find({ "role": "teacher" })
        .then((response) => { res.json(response) })
        .catch(err => console.log(err))

})

//PARA LA REQUEST DE CLASE INDIVIDUAL A UN PROFESOR, EL USER ID ES EL DEL ALUMNO
router.post('/contact/:teacher_id/:user_id', (req, res) => {

    const { user_id, teacher_id } = req.params
    const { comment } = req.body

    Request

        .create({ student: user_id, teacher: teacher_id, comment })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})
//RECHAZAR UNA SESIONINDIVIDUAL POR PARTE DEL PROFESOR

router.put('/contact/:request_id/decline', (req, res) => {
    const { request_id } = req.params

    Request
        .findByIdAndUpdate(request_id, { isActive: false }, { new: true })
        .then(response => res.json(response))
        .catch(err => console.log('no lo ha hecho', err))
})
//ACEPTAR UNA SESION INDIVIDUAL POR PARTE DEL PROFESOR
router.put('/contact/:request_id/approve', (req, res) => {
    const { request_id } = req.params
    const { date, avatar, description, eventType, lat, lgn } = req.body

    Request
        .findByIdAndUpdate(request_id, { isAccepted: true, isActive: false }, { new: true })
        .then(request => {

            Event
                .create({ date, avatar, description, eventType, location: { coordinates: [lat, lgn] } })
                .then(event => {

                    const StudentEventCreated = User.findByIdAndUpdate(request.student[0], { $push: { studentData: { individualEvent: event._id } } }, { new: true })
                    const teacherEventCreated = User.findByIdAndUpdate(request.teacher[0], { $push: { teacherData: { individualEvent: event._id } } }, { new: true })

                    return Promise.all([StudentEventCreated, teacherEventCreated])
                })
                .then(response => res.json(response))
                .catch(err => console.log('no lo ha hecho', err))
        })


})
module.exports = router