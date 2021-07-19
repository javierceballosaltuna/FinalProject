const express = require('express')
const router = express.Router()

const Event = require('../models/Event.model')


router.get('/individual-sessions', (req, res) => {

    Event
        .find()
        .select('') // filtrar por type individual
        .populate('')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading individual sessions', err }))

})

router.get('/group-sessions', (req, res) => {

    Event
        .find()
        .select('') // filtrar por type group
        .populate('')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading group sessions', err }))

})

router.get('/create', (req, res) => {

    const { coordinates, date, avatar, description, eventType } = req.body

    const location = { coordinates }

    Event
        .create(location, date, avatar, description, eventType)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating event', err }))

})

router.get('/:event_id', (req, res) => {

    Event
        .findById(req.params.event_id)
        .populate('')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading event', err }))

})

router.delete('/delete/:event_id', (req, res) => {

    Event
        .findByIdAndDelete(req.params.event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting an event', err }))
})

router.put('/edit/:event_id', (req, res) => {

    const { event_id } = req.params
    const { coordinates, date, avatar, description } = req.body

    const location = { coordinates }

    Event
        .findByIdAndUpdate(event_id, { location, date, avatar, description })
        .populate('teachingMaterials')
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing event', err }))
})


module.exports = router