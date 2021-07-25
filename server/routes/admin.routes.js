const User = require("../models/User.model")
const Request = require('../models/Request.model')
const TeachingMaterial = require('../models/TeachingMaterial.model')
const Event = require('../models/Event.model')
const { checkRoles, isLoggedIn } = require("../middleware")
const router = require("express").Router()


router.get('/users', isLoggedIn, checkRoles('admin'), (req, res) => {

    User
        .find()
        .populate('studentData.teachers studentData.Event teacherData.teachingMaterials teacherData.Event')
        .select('studentData.teachers.name')
        .lean()
        .then((response) => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: `Error loading profile with ID: ${elm._id}`, err }))

})

router.get('/events', isLoggedIn, checkRoles('admin'), (req, res) => {

    Event
        .find()
        .populate('TeachingMaterial')
        .lean()
        .then((response) => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading events', err }))

    })

router.get('/teaching-materials', isLoggedIn, checkRoles('admin'),  (req, res) => {

    TeachingMaterial
        .find()
        .lean()
        .then((response) => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading teaching materials', err }))

    })

router.get('/requests', isLoggedIn, checkRoles('admin'),  (req, res) => {

    Request
        .find()
        .populate('student teacher')
        .lean()
        .then((response => res.json(response)))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading requests', err }))

    })

module.exports = router

