const express = require('express')
const router = express.Router()
const User = require("../models/User.model")
const Event = require('../models/Event.model')
const { checkMongooseError } = require('../utils')

const { isLoggedIn, checkRoles } = require('../middleware/index')


router.post('/group-sessions/create/', isLoggedIn, checkRoles('teacher'), (req, res) => {

    const { date, description } = req.body
    const address = { street, zipCode, city, country } = req.body
    const { user_id } = req.session.currentUser

    Event
        .create({ location: { address }, description, eventType: 'group', date })
        .then(event => User.findByIdAndUpdate(user_id, { $push: { 'teacherData.groupEvent': event._id } }, { new: true }))
        .then(response => res.json(response))
        .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

})

router.get('/individual-sessions', isLoggedIn, (req, res) => {

    Event
        .find({ eventType: "individual", isActive: "true" })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading individual sessions', err }))

})

router.get('/group-sessions', isLoggedIn, (req, res) => {

    Event
        .find({ eventType: "group", isActive: "true" })
        .select('description date location.address.city')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading group sessions', err }))

})

router.get('/details/:event_id', isLoggedIn, (req, res) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading event', err }))

})

router.put('/join/:event_id', isLoggedIn, checkRoles('student'), (req, res) => {

    const { event_id } = req.params
    const { _id } = req.session.currentUser

    User
        .findByIdAndUpdate(_id, { $push: { 'studentData.groupEvent': event_id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})

router.put('/cancel/:event_id', isLoggedIn, checkRoles('teacher', 'admin'), (req, res) => {

    const { event_id } = req.params

    Event
        .findByIdAndUpdate(event_id, { isActive: false }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting an event', err }))

})

router.put('/edit/:event_id', isLoggedIn, checkRoles('teacher', 'admin'), (req, res) => {

    const { event_id } = req.params
    const { date, description, location } = req.body


    Event
        .findByIdAndUpdate(event_id, { location, description, date }, { new: true })
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing event', err }))

})

router.put('/quit/:event_id', isLoggedIn, checkRoles('student'), (req, res) => {

    const { event_id } = req.params
    const { _id } = req.session.currentUser

    User
        .findByIdAndUpdate(_id, { $pull: { 'studentData.groupEvent': event_id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})


module.exports = router