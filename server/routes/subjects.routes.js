const User = require("../models/User.model")
const Request = require("../models/Request.model")
const Event = require("../models/Event.model")
const { isLoggedIn, checkRoles } = require("../middleware")
const router = require("express").Router()
const { checkMongooseError } = require('../utils')


router.get('/subjects', (req, res) => {

    User
        .find({ role: "teacher" })
        .select('teacherData.name teacherData.lastName teacherData.avatar teacherData.subject teacherData.description')
        .lean()
        .then((response) => { res.json(response) })
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to show all teachers', err }))

})

router.post('/contact/:teacher_id/', isLoggedIn, checkRoles('student'), (req, res) => {

    const { teacher_id } = req.params
    const { comment } = req.body
    const user_id = req.session.currentUser._id

    Request
        .create({ student: user_id, teacher: teacher_id, comment })
        .then(response => res.json(response))
        .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

})

router.put('/contact/:request_id/approve', isLoggedIn, checkRoles('teacher'), (req, res) => {

    const { request_id } = req.params
    const address = { street, zipCode, city, country } = req.body
    const { date, description } = req.body
    console.log(date, description, 'hace la llamada')

    let request

    Request
        .findByIdAndUpdate(request_id, { isAccepted: true, isActive: false }, { new: true })
        .then((requestFound) => {
            request = requestFound
            return Event
                .create({ date, description, eventType: 'individual', location: { address } }, console.log('crea el evento'))
        })
        .then(event => {

            const StudentEventCreated = User.findByIdAndUpdate(request.student, { $push: { 'studentData.individualEvent': event._id } }, { new: true })
            const teacherEventCreated = User.findByIdAndUpdate(request.teacher, { $push: { 'teacherData.individualEvent': event._id } }, { new: true })
            console.log(request.student.userName)
            return Promise
                .all([StudentEventCreated, teacherEventCreated])
        })
        .then(response => res.json(response))
        .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

})


router.put('/contact/:request_id/decline', isLoggedIn, checkRoles('teacher'), (req, res) => {

    const { request_id } = req.params

    Request
        .findByIdAndUpdate(request_id, { isActive: false, isAccepted: false }, { new: true })
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to decline individual event request', err }))

})


module.exports = router