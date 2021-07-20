const express = require('express')
const router = express.Router()
const User = require("../models/User.model")

const Event = require('../models/Event.model')


router.post('/group-sessions/create', (req, res) => {

    const { date, avatar, description, eventType, lat, lgn } = req.body
    const { user_id } = req.session.user // ver que sale de aquí

    Event
        .create({ location: { coordinates: [lat, lgn] }, avatar, description, eventType, date })
        .then(event => User.findByIdAndUpdate(user_id, { $push: { teacherData: { groupEvent: event._id } } }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})

router.get('/individual-sessions', (req, res) => {

    Event
        .find({ "eventType": "individual" })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading individual sessions', err }))
})

router.get('/group-sessions', (req, res) => {

    Event
        .find({ "eventType": "group" })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading group sessions', err }))
})

router.get('/:event_id', (req, res) => {

    Event
        .findById(req.params.event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading event', err }))

})

router.post('/:event_id/join', (req, res) => {

    const { user_id } = req.session.user // ver que sale de aquí

    Event
        .findById(req.params.event_id)
        .then(event => User.findByIdAndUpdate(user_id, { $push: { studentData: { groupEvent: event._id } } }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating group-session', err }))

})

router.delete('/delete/:event_id', (req, res) => {

    Event
        .findByIdAndDelete(req.params.event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting an event', err }))
})

router.put('/edit/:event_id', (req, res) => {

    const { event_id } = req.params
    const { date, avatar, description, eventType, lat, lgn } = req.body

    Event
        .findByIdAndUpdate(event_id, { location: { coordinates: [lat, lgn] }, avatar, description, eventType, date })
        .populate('teachingMaterials')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing event', err }))
})


module.exports = router