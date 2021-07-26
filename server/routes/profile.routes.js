const User = require('../models/User.model')
const router = require("express").Router()
const Request = require('../models/Request.model')

const { isLoggedIn } = require('../middleware')
const cdnUpload = require('../config/fileUpload.config')

router.get('/', (req, res) => {

    const user_id = req.session.user._id

    if (req.session.user.role === 'student') {

        const getStudentDetails = User.findById(user_id).populate('studentData.teachers studentData.individualEvent studentData.groupEvent')
        const getRequestDetails = Request.find({ "student": `${user_id}` }).select('teacher isAccepted')
      
        Promise
            .all([getStudentDetails, getRequestDetails])
            .then(response => console.log(response[1]))
            .catch(err => res.status(500).json({ code: 500, message: 'Error loading your profile', err }))    

    } else {

        const getTeacherDetails = User.findById(user_id).populate('teacherData.TeachingMaterial teacherData.Event')
        const getRequestDetails = Request.find({ "teacher": `${user_id}` }).select('student isAccepted isActive')

        Promise
            .all([getTeacherDetails, getRequestDetails])
            .then(response => res.json(response))
                
            .catch(err => res.status(500).json({ code: 500, message: 'Error loading your profile', err }))
       
    } 
})

router.put('/edit', isLoggedIn, cdnUpload.single('avatar'),(req, res) => {

    const { user_id } = req.session.user

    if (req.session.user.role === 'student') {

        const studentData = { name, lastName, age, description, course, interests, legalTutor } = req.body

        User
            .findByIdAndUpdate(user_id, { studentData }, { new: true })
            .lean()
            .then(response => res.json(response))
            .catch(err => res.status(500).json({ code: 500, message: 'Error trying to save changes (student)', err }))

    } else {

        const teacherData = { name, lastName, age, description, avatar: req.file.path, subject } = req.body

        User
            .findByIdAndUpdate(req.session.user._id, { teacherData }, { new: true })
            .lean()
            .then(response => res.json(response))
            .catch(err => res.status(500).json({ code: 500, message: 'Error trying to save changes (teacher)', err }))

    }
})

router.delete('/delete', isLoggedIn, (req, res) => {

    const user_id = req.session.user._id

    User
        .findByIdAndRemove(user_id)
        .lean()
        .then(() => req.session.destroy(() => res.json({ message: 'Logout successful' })))
        .catch(err => res.status(400).json({ code: 400, message: 'Error trying to delete your account', err }))

})


module.exports = router
