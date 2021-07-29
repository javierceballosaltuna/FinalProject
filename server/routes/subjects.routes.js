const User = require("../models/User.model")
const Request = require("../models/Request.model")
const Event = require("../models/Event.model")
const { isLoggedIn, checkRoles } = require("../middleware")
const router = require("express").Router()
const { checkMongooseError } = require('../utils')


router.get('/subjects',  (req, res) => {

    User
        .find({ role: "teacher" })
        .select('teacherData.name teacherData.lastName teacherData.avatar teacherData.subject teacherData.description')
        .lean()
        .then((response) => { res.json(response) })
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to show all teachers', err }))

})

router.post('/contact/:teacher_id/',  (req, res) => {
// isLoggedIn, checkRoles('student'),
    const { teacher_id } = req.params
    const { comment } = req.body
    const user_id = req.session.user._id
    console.log('hace la llamada')
    console.log(req.body)
    Request

        .create({ student: user_id, teacher: teacher_id, comment })
        .then(response => res.json(response))
        .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

})

router.put('/contact/:request_id/approve', (req, res) => {
    //isLoggedIn, checkRoles('teacher'),

    const { request_id } = req.params
    const address = { street, zipCode, city, country } = req.body
    const { date, description } = req.body
console.log('hace la llamada')
    Request
        .findByIdAndUpdate(request_id, { isAccepted: true, isActive: false }, { new: true })
        
        .then((request) => {
            Event
                .create({ date, description, eventType: 'individual', location: { address } }, console.log('crea el evento'))
                .then(event => {

                    const StudentEventCreated = User.findByIdAndUpdate(request.student, { $push: { 'studentData.individualEvent': event._id } }, { new: true })
                    const teacherEventCreated = User.findByIdAndUpdate(request.teacher, { $push: { 'teacherData.individualEvent': event._id } }, { new: true })
                    console.log(request.student.userName)
                    return Promise
                        .all([StudentEventCreated, teacherEventCreated])
                        // .then(response => res.json(response))
                        // .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))
                })
                // .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))
        })
        
        .then(response => res.json(response))
        .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

})


router.put('/contact/:request_id/decline', isLoggedIn, checkRoles('teacher'), (req, res) => {

    const { request_id } = req.params

    Request
        .findByIdAndUpdate(request_id, { isActive: false }, { new: true })
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to decline individual event request', err }))

})


module.exports = router