const router = require("express").Router()
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const User = require('../models/User.model')
const { checkMongooseError } = require('../utils')

const { isLoggedIn, checkRoles } = require('../middleware/index')


router.post('/signup-student', (req, res) => {

    const { userName, password, email } = req.body

    User
        .findOne({ userName })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'User already exists' })
                return
            }

            if (password.length === 0) {
                res.status(400).json({ code: 400, message: 'Please, enter a password' })
                return
            }

            if (password.length < 5) {
                res.status(400).json({ code: 400, message: 'Password should be more than 5 characters' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ userName, password: hashPass, email, role: 'student' })
                .then(user => {
                    req.session.user = user
                    res.json(req.session.user)
                })
                .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))

})

router.post('/signup-teacher', (req, res) => {

    const { userName, password, email } = req.body

    User
        .findOne({ userName })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'User already exists' })
                return
            }

            if (password.length === 0) {
                res.status(400).json({ code: 400, message: 'Please, enter a password' })
                return
            }

            if (password.length < 5) {
                res.status(400).json({ code: 400, message: 'Password should be more than 5 characters' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ userName, password: hashPass, email, role: 'teacher' })
                .then(user => {
                    req.session.user = user
                    res.json(req.session.user)
                })
                .catch(err => res.status(400).json({ code: 400, message: checkMongooseError(err) }))

        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))

})

router.post('/', (req, res) => {

    const { userName, password } = req.body

    User
        .findOne({ userName })
        .then(user => {
            if (!user) {
                res.status(401).json({ code: 401, message: 'User not registered', err: 'Wrong user' })
                return
            }

            if (bcrypt.compareSync(password, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorrect password', err: 'Wrong password' })
                return
            }

            req.session.user = user
            res.json(req.session.user)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))

})

router.put("/complete-registration/", isLoggedIn, checkRoles('teacher', 'student'), (req, res) => {

    if (req.session.user.role === 'teacher') {
        const { name, lastName, age, description, avatar, subject } = req.body
        const teacherData = { name, lastName, age, description, avatar, subject }

        User
            .findByIdAndUpdate(req.session.user._id, { teacherData }, { new: true })
            .then((user) => { res.json(user) })
            .catch(err => res.status(500).json({ code: 500, message: 'Error completing teacher profile', err }))

    } else {

        const { name, lastName, age, description, course, interests, tutorName, tutorLastName, personalId } = req.body
        const legalTutor = { tutorName, tutorLastName, personalId }
        const studentData = { name, lastName, age, description, course, interests, legalTutor }

        User
            .findByIdAndUpdate(req.session.user._id, { studentData }, { new: true })
            .lean()
            .then((user) => { res.json(user) })
            .catch(err => res.status(500).json({ code: 500, message: 'Error completing student profile', err }))

    }

})

router.post('/isloggedin', isLoggedIn, (req, res) => {
    req.session.user ? res.json(req.session.user) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

router.get('/logout', isLoggedIn, (req, res) => { req.session.destroy(() => res.json({ message: 'Logout successful' })) })


module.exports = router