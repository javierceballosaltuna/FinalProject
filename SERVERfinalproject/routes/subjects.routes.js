const User = require("../models/User.model")
const Request = require("../models/Request.model")
const Event = require("../models/Event.model")
const { isLoggedIn, checkRoles } = require("../middleware")
const router = require("express").Router()


router.get('/subjects', isLoggedIn, (req, res) => {

    User
        .find({ "role": "teacher" })
        .then((response) => { res.json(response) })
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to show all teachers', err }))

})

router.post('/contact/:teacher_id/', isLoggedIn, checkRoles('student'), (req, res) => {

    const { teacher_id } = req.params
    const { comment } = req.body
    const user_id = req.session.user._id

    Request

        .create({ student: user_id, teacher: teacher_id, comment })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to send request', err }))

})

router.put('/contact/:request_id/approve', isLoggedIn, checkRoles('teacher'), (req, res) => {

    const { request_id } = req.params
    const { date, avatar, description, eventType, lat, lgn } = req.body

    Request
        .findByIdAndUpdate(request_id, { isAccepted: true, isActive: false }, { new: true })
        .then(request => {

            Event
                .create({ date, avatar, description, eventType, location: { coordinates: [lat, lgn] } })
                .then(event => {

                    const StudentEventCreated = User.findByIdAndUpdate(request.student, { $push: { 'studentData.individualEvent': event._id } }, { new: true })
                    const teacherEventCreated = User.findByIdAndUpdate(request.teacher, { $push: { 'teacherData.individualEvent': event._id } }, { new: true })

                    return Promise.all([StudentEventCreated, teacherEventCreated])

                })
                .then(response => res.json(response))
                .catch(err => res.status(500).json({ code: 500, message: 'Error trying to accept individual event request', err }))

        })

})

router.put('/contact/:request_id/decline', isLoggedIn, checkRoles('teacher'), (req, res) => {

    const { request_id } = req.params

    Request
        .findByIdAndUpdate(request_id, { isActive: false }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to decline individual event request', err }))

})


module.exports = router