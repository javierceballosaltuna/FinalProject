const express = require('express')
const router = express.Router()
const User = require("../models/User.model")
const Event = require('../models/Event.model')
const { checkMongooseError } = require('../utils')

const { isLoggedIn, checkRoles } = require('../middleware/index')
const cdnUpload = require('../config/fileUpload.config')//HAY QUE VER EN EVENT CREATE SI METEMOS LOS TEACHING MATERIALS, HABRIA QUE POPULAR.


router.post('/group-sessions/create/', (req, res) => {

    // isLoggedIn, checkRoles('teacher'),

    const { date, description, lat, lgn } = req.body
    const address = { street, zipCode, city, country } = req.body
    const { user_id } = req.session.user

    Event
        .create({ location: { coordinates: [lat, lgn], address }, description, eventType: 'group', date })
        .then(event => User.findByIdAndUpdate(user_id, { $push: { 'teacherData.groupEvent': event._id } }, { new: true }))
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

})

router.get('/individual-sessions', (req, res) => {

    // isLoggedIn,  

    Event
        .find()
        // .find({ eventType: "individual" })
        // .select('description date location.address.city')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading individual sessions', err }))

})

router.get('/group-sessions', (req, res) => {
    //  isLoggedIn,  

    Event
        .find({ "eventType": "group" })
        .select('description date location.address.city')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading group sessions', err }))

})

router.get('/:event_id', (req, res) => {
    //  isLoggedIn,  


    Event
        .findById(req.params.event_id)
        .select('location date description')
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading event', err }))

})

router.put('/:event_id/join/', (req, res) => {
    //  isLoggedIn,  checkRoles('student'), 

    const { event_id } = req.params
    const { user_id } = req.session.user

    User
        .findByIdAndUpdate(user_id, { $push: { 'studentData.groupEvent': event_id } }, { new: true })
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})

router.put('/cancel/:event_id', (req, res) => {
    //  isLoggedIn, checkRoles('teacher', 'admin'),


    Event
        .findByIdAndUpdate(req.params.event_id, { isActive: false }, { new: true })
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting an event', err }))

})

router.put('/edit/:event_id', (req, res) => {
    //  isLoggedIn, checkRoles('teacher', 'admin'),


    const { event_id } = req.params
    const { date, description, lat, lgn } = req.body
    const address = { street, zipCode, city, country } = req.body

    Event
        .findByIdAndUpdate(event_id, { location: { coordinates: [lat, lgn], address }, avatar, description, eventType, date }, { new: true })
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing event', err }))

})

router.put('/:event_id/quit/', (req, res) => {

    const { event_id } = req.params
    const { user_id } = req.session.user

    User
        .findByIdAndUpdate(user_id, { $pull: { 'studentData.groupEvent': event_id } }, { new: true })
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})


module.exports = router