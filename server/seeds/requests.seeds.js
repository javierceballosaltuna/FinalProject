const mongoose = require("mongoose") // mongoose no lo necesitamos aqui
const Request = require('../models/Request.model') // olo se necesita el modelo y los require de arriba del todo
mongoose.connect(`mongodb+srv://pablojavi:Pablojavi@finalprojectironhack.eyx6s.mongodb.net/teacherproject`)//y esto tampoco se necesita

const requests = [{
    "student": "60ff1410895e360f04411920",
    "teacher": "60ff1410895e360f04411890",
    "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
}, {
        "student": "60ff1410895e360f0441191c",
        "teacher": "60ff1410895e360f04411896",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }, {
        "student": "60ff1410895e360f04411920",
        "teacher": "60ff1410895e360f0441188e",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }, {
        "student": "60ff1410895e360f04411908",
        "teacher": "60ff1410895e360f04411888",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }, {
        "student": "60ff1410895e360f0441191e",
        "teacher": "60ff1410895e360f04411888",
        "comment": "how does that sound to you? Thanks in advance!"
    }, {
        "student": "60ff1410895e360f044118f8",
        "teacher": "60ff1410895e360f04411892",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }, {
        "student": "60ff1410895e360f04411918",
        "teacher": "60ff1410895e360f04411896",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }, {
        "student": "60ff1410895e360f0441190c",
        "teacher": "60ff1410895e360f04411892",
        "comment": "how does that sound to you? Thanks in advance!"
    }, {
        "student": "60ff1410895e360f0441191c",
        "teacher": "60ff1410895e360f0441188a",
        "comment": "how does that sound to you? Thanks in advance!"
    }, {
        "student": "60ff1410895e360f04411918",
        "teacher": "60ff1410895e360f0441188e",
        "comment": "how does that sound to you? Thanks in advance!"
    }, {
        "student": "60ff1410895e360f0441191a",
        "teacher": "60ff1410895e360f04411896",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }, {
        "student": "60ff1410895e360f0441191a",
        "teacher": "60ff1410895e360f04411888",
        "comment": "how does that sound to you? Thanks in advance!"
    }, {
        "student": "60ff1410895e360f04411908",
        "teacher": "60ff1410895e360f0441188e",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }, {
        "student": "60ff1410895e360f044118fc",
        "teacher": "60ff1410895e360f04411886",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }, {
        "student": "60ff1410895e360f0441191c",
        "teacher": "60ff1410895e360f04411894",
        "comment": "Hello there! I'm interested in speaking with you in order to take a few classes"
    }


]

Request
    .create(requests)
    .then(requests => console.log(`se han creado ${requests.length} requests`))
    .catch(err => console.log('tenemos un error:', err))
