const express = require('express')
const router = express.Router()
const User = require("../models/User.model")
const TeachingMaterial = require('../models/TeachingMaterial.model')

const { isLoggedIn, checkRoles } = require('../middleware/index')



router.get('/', isLoggedIn, (req, res) => {

    TeachingMaterial
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading teaching materials', err }))

})

router.post('/create', isLoggedIn, checkRoles ('teacher'), (req, res) => {

    const { name, url, description, subject } = req.body
    const { user_id } = req.session.user // ver que sale de aquí

    TeachingMaterial
        .create({ name, url, description, subject })
        .then(teachingMaterial => User.findByIdAndUpdate(user_id, { $push: { 'teacherData.teachingMaterials': teachingMaterial._id } }))
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error creating teaching material', err }))

})

router.get('/:material_id', isLoggedIn, (req, res) => {

    TeachingMaterial
        .findById(req.params.material_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading teaching material', err }))

})

router.delete('/delete/:material_id', isLoggedIn, checkRoles ('teacher', 'admin'), (req, res) => {

    TeachingMaterial
        .findByIdAndDelete(req.params.material_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting teaching material', err }))
})

router.put('/edit/:material_id', isLoggedIn, checkRoles ('teacher', 'admin'), (req, res) => {

    const { material_id } = req.params
    const { name, url, description, subject } = req.body

    TeachingMaterial
        .findByIdAndUpdate(material_id, { name, url, description, subject })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing event', err }))

})


module.exports = router