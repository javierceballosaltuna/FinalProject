
const User = require('../models/User.model');
const router = require("express").Router()
const errorMessage = 'fields have been filled already'


console.log('aqui se queda')
router.get('/', (req, res) => {
    console.log('hey')
    res.send('hello')
});

router.post('/', (req, res) => {

    const { userName, password, teacherData, studentData, role } = req.body
    console.log('heyheyhye')
    User
        .create({ userName, password, teacherData, studentData, role })
        .then((user) => {
            // Bind the user to the session object
            req.session.user = user;
            res.json(user)
            console.log('lo ha creado')
        })
        .catch((err) => console.log(err));
});


//STUDENT, TEACHER DETAILS

router.put("/:user_id", (req, res) => {
    const { user_id } = req.params


    const { name, lastName, age, description, course } = req.body
    const legalTutor = { name, lastName, personalId } = req.body
    const studentData = { name, lastName, age, description, course, legalTutor }
    console.log('heyheyhye')

    User
        .findByIdAndUpdate(user_id,
            // A REVISAR ESTO
            { $push: { studentData } }, { new: true })
        .then((user) => {
            // Bind the user to the session object

            res.json(user)
            console.log('lo ha creado')
        })
        .catch((err) => console.log(err));
});



module.exports = router