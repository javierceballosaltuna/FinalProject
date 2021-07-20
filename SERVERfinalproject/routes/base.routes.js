
const studentSchema = require('../models/Student.schema');
const teacherSchema = require('../models/Teacher.schema')
const User = require('../models/User.model');
const router = require("express").Router();

const errorMessage = 'fields have been filled already'



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


//STUDENT FILLING REST OF DETAILS (AS STUDENT)
router.put("/:user_id", (req, res) => {

    // if (req.session.user.role === 'teacher') {
        const { user_id } = req.params
        const { name, lastName, age, description, avatar, subject, groupEvent, individualEvent, teachingMaterials } = req.body;
        const teacherData = { name, lastName, age, description, avatar, subject, groupEvent, individualEvent, teachingMaterials }

        User
            .findByIdAndUpdate(user_id,
                // A REVISAR ESTO
                { $push: { teacherData } }, { new: true })
            .then((user) => {
                // Bind the user to the session object
                res.json(user)
                console.log('lo ha creado')
            })
            .catch((err) => console.log(err));
    })

    // else { COMENTAMOS HASTA QUE TENGAMOS SESION

    router.put("/:user_id", (req, res) => {

        const { user_id } = req.params
        const { name, lastName, age, description, course, interests, tutorName, tutorLastName, personalId } = req.body;
        const legalTutor = { tutorName, tutorLastName, personalId }
        const studentData = { name, lastName, age, description, course, interests, legalTutor }

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
    })
// })COMENTAMOS HASTA Q ESTÉ LA SESSION INICIADA




//TEACHER FILLING REST OF DETAILS (AS TEACHER)




module.exports = router