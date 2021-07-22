const router = require("express").Router()
const User = require("../models/User.model")
const TeachingMaterial = require('../models/TeachingMaterial.model')

const { checkMongooseError } = require('./../utils')
const { isLoggedIn, checkRoles } = require('../middleware/index')


router.get('/', isLoggedIn, (req, res) => {

    TeachingMaterial
        .find()
        .select('name url')
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading teaching materials', err }))

})

router.post('/create', isLoggedIn, checkRoles('teacher'), (req, res) => {

    const { name, url, description, subject } = req.body
    const { user_id } = req.session.user 

    TeachingMaterial
        .create({ name, url, description, subject })
        .then(teachingMaterial => User.findByIdAndUpdate(user_id, { $push: { 'teacherData.teachingMaterials': teachingMaterial._id } }))
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

})

router.get('/:material_id', isLoggedIn, (req, res) => {

    TeachingMaterial
        .findById(req.params.material_id)
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error loading teaching material', err }))

})

router.delete('/delete/:material_id', isLoggedIn, checkRoles('teacher', 'admin'), (req, res) => {

    TeachingMaterial
        .findByIdAndDelete(req.params.material_id)
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting teaching material', err }))

})

router.put('/edit/:material_id', isLoggedIn, checkRoles('teacher', 'admin'), (req, res) => {

    const { material_id } = req.params
    const { name, url, description, subject } = req.body

    TeachingMaterial
        .findByIdAndUpdate(material_id, { name, url, description, subject })
        .lean()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing teaching material', err }))

})


module.exports = router