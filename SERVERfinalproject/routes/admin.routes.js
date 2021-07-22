const User = require("../models/User.model");
const Request = require('../models/Request.model')
const TeachingMaterial = require('../models/TeachingMaterial.model')
const Event = require('../models/Event.model');
const { checkRoles, isLoggedIn } = require("../middleware");
const router = require("express").Router();


//ADMIN PANEL


router.get('/users', isLoggedIn, checkRoles('admin'), (req, res) => {

    User
        .find()
        .populate('studentData.teachers studentData.Event teacherData.teachingMaterials teacherData.Event')
        .then((response) => res.json(response))

        // response.map(elm =>

        //     Request
        //         .find({ $or: [{ 'student': `${elm._id}` }, { 'teacher': `${elm._id}` }] }) //ESTO TENGO QUE VERLOOOOOOOOOOOOOOOOOOOOOOO
        //         .select('isAccepted isActive')
        //         .then((response => res.json(response)))
        .catch(err => res.status(500).json({ code: 500, message: `Error loading profile with ID: ${elm._id}`, err }))
})

router.get('/events', isLoggedIn, checkRoles('admin'), (req, res) => {

    Event
        .find()
        .populate('TeachingMaterial')
        .then((response) => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading events', err }))
})

router.get('/teachingMaterials', isLoggedIn, checkRoles('admin'),  (req, res) => {

    TeachingMaterial
        .find()
        .then((response) => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading teaching materials', err }))
})

router.get('/requests', isLoggedIn, checkRoles('admin'),  (req, res) => {

    Request
        .find() 
        .populate('User')
        .then((response => res.json(response)))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading requests', err }))
})

module.exports = router

