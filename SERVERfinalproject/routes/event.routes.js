const express = require('express')
const router = express.Router()
const { isLoggedIn, checkRoles } = require('../middleware/index')

const User = require("../models/User.model")

const Event = require('../models/Event.model')


router.post('/group-sessions/create/', isLoggedIn, checkRoles('teacher'), (req, res) => {

    const { date, description, lat, lgn } = req.body
    const { user_id } = req.session.user

    Event
        .create({ location: { coordinates: [lat, lgn] }, description, eventType: 'group', date })
        .then(event => User.findByIdAndUpdate(user_id, { $push: { 'teacherData.groupEvent': event._id } }, { new: true }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})

router.get('/individual-sessions', isLoggedIn,  (req, res) => {

    Event
        .find({ "eventType": "individual" })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading individual sessions', err }))
})

router.get('/group-sessions', isLoggedIn,  (req, res) => {

    Event
        .find({ "eventType": "group" })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading group sessions', err }))
})

router.get('/:event_id', isLoggedIn,  (req, res) => {

    Event
        .findById(req.params.event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading event', err }))

})

router.put('/:event_id/join/', isLoggedIn, checkRoles('student'), (req, res) => {
    const { event_id } = req.params
    const { user_id } = req.session.user

    Event
        .findById(event_id)
        .then(event => User.findByIdAndUpdate(user_id, { $push: { 'studentData.groupEvent': event_id } }, { new: true }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})


router.put('/cancel/:event_id', isLoggedIn, checkRoles('teacher', 'admin'), (req, res) => {

    //PONER LÓGICA PARA EVENTOS PASADOS DE FECHA
    Event
        .findByIdAndUpdate(req.params.event_id, { isActive: false }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting an event', err }))
})

router.put('/edit/:event_id', isLoggedIn, checkRoles('teacher', 'admin'), (req, res) => {

    const { event_id } = req.params
    const { date, avatar, description, eventType, lat, lgn } = req.body

    Event
        .findByIdAndUpdate(event_id, { location: { coordinates: [lat, lgn] }, avatar, description, eventType, date }, { new: true })
        .populate('teachingMaterials')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing event', err }))
})

router.put('/:event_id/quit/', isLoggedIn, (req, res) => {
    const { event_id } = req.params
    const { user_id } = req.session.user // ver que sale de aquí

    Event
        .findById(event_id)
        .then(() => User.findByIdAndUpdate(user_id, { $pull: { 'studentData.groupEvent': event_id } }, { new: true }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})

module.exports = router