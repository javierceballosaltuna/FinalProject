const User = require('../models/User.model');
const router = require("express").Router();
const Request = require('../models/Request.model')

router.get('/', (req, res) => {

    const user_id = req.session.user._id

    if (req.session.user.role === 'student') {
        User
            .findById(user_id)
            .populate('studentData.teachers studentData.Event')
            .then((user) =>//nos pasamos user info, para sumarlo a request info y lo sacamos en el JSON AMBOS dentro de UN OBJETO
                Request
                    .find({ "student": `${user_id}` })
                    .then((request => res.json({ user, request })))
                    .catch(err => res.status(500).json({ code: 500, message: 'Error loading your profile', err }))
            )
    }

    else {

        User
            .findById(user_id)
            .populate('teacherData.TeachingMaterial teacherData.Event')
            .then((user) => //nos pasamos user info, para sumarlo a request info y lo sacamos en el JSON AMBOS dentro de UN OBJETO
                Request
                    .find({ "teacher": `${user_id}` })
                    .then((request => res.json({ user, request })))
                    .catch(err => res.status(500).json({ code: 500, message: 'Error loading your profile', err }))
            )
    }
})



router.put('/edit', (req, res) => {

    const { user_id } = req.session.user

    if (req.session.user.role === 'student') {
        const { name, lastName, age, description, course, interests, legalTutor } = req.body
        const studentData = { name, lastName, age, description, course, interests, legalTutor }

        //USERNAME PASSWORD EDIT, AS EXTRA
        User
            .findByIdAndUpdate(user_id, { studentData }, { new: true })
            .then(response => res.json(response))
            .catch(err => res.status(500).json({ code: 500, message: 'Error trying to save changes', err }))
    }

    else {
        const { name, lastName, age, description, avatar, subject } = req.body
        const teacherData = { name, lastName, age, description, avatar, subject }

        User
            .findByIdAndUpdate(req.session.user._id, { teacherData }, { new: true })
            .then((user) => { res.json(user) })
            .catch((err) => console.log(err))


    }
})

router.delete('/delete', (req, res) => {

    const user_id = req.session.user._id

    User
        .findByIdAndRemove(user_id)
        .then(() => {
            req.session.destroy(() => res.json({ message: 'Logout successful' }))
            res.json({ message: 'user account deleted successfully' })
        })
        .catch(err => res.status(400).json({ code: 400, message: 'Error trying to delete your account', err }))
})


module.exports = router