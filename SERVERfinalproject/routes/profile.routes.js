const User = require('../models/User.model');
const router = require("express").Router();
const Request = require('../models/Request.model')

router.get('/', (req, res) => {

    const { user_id } = req.session.user

    if (req.session.user.role === 'student') {
        User
            .findById(user_id)
            .populate('studentData.Teacher studentData.Event')
            .then((response) =>
                Request
                    .find({ "student": response._id })//ESTO TENGO QUE VERLOOOOOOOOOOOOOOOOOOOOOOO
                    .then((response => res.json(response)))
                    .catch(err => res.status(500).json({ code: 500, message: 'Error loading your profile', err }))
            )
    }

    else {

        User
            .findById(user_id)
            .populate('teacherData.TeachingMaterial teacherData.Event')
            .then((response) => res.json(response))
            .catch(err => res.status(500).json({ code: 500, message: 'Error loading your profile', err }))
    }
})



router.put('/edit', (req, res) => {

    const { user_id } = req.session.user
    const { name, lastName, age, description, course, interests, legalTutor } = req.body
    const studentData = { name, lastName, age, description, course, interests, legalTutor }

    //USERNAME PASSWORD EDIT, AS EXTRA
    User
        .findByIdAndUpdate(user_id, { studentData }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to save changes', err }))
})


router.delete('/delete', (req, res) => {

    const { user_id } = req.session.user

    User
        .findByIdAndRemove(user_id)
        .then((response) => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error trying to delete your account', err }))
})

module.exports = router

