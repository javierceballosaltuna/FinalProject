
// require ('dotenv/config')
//require ('./index), aunque index tenga requerido mongoose en su archivo, requerirlo no hace que mongoose venga con el.

const mongoose = require("mongoose") // mongoose no lo necesitamos aqui
const User = require('../models/User.model') // olo se necesita el modelo y los require de arriba del todo
mongoose.connect(`mongodb+srv://pablojavi:Pablojavi@finalprojectironhack.eyx6s.mongodb.net/teacherproject`)//y esto tampoco se necesita




const users = [{
    "userName": "ifosten0",
    "password": "tCgOAneCbJ",
    "email": "ifosten0@reuters.com",
    "role": "teacher",
    "teacherData": {
        "name": "Imojean",
        "lastName": "Fosten",
        "age": 19,
        "description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
        "subject": "spanish"
    }
}, {
        "userName": "hyaakov1",
        "password": "xCSLt6eJy0",
        "email": "hyaakov1@archive.org",
        "role": "teacher",
        "teacherData": {
            "name": "Howard",
            "lastName": "Yaakov",
            "age": 20,
            "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "art"
        }
    }, {
        "userName": "shawkes2",
        "password": "AEvsveT",
        "email": "shawkes2@globo.com",
        "role": "teacher",
        "teacherData": {
            "name": "Stacie",
            "lastName": "Hawkes",
            "age": 26,
            "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "art"
        }
    }, {
        "userName": "sbeardon3",
        "password": "54zMr8rzdU",
        "email": "sbeardon3@google.com",
        "role": "teacher",
        "teacherData": {
            "name": "Staford",
            "lastName": "Beardon",
            "age": 24,
            "description": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "science"
        }
    }, {
        "userName": "cfranklyn4",
        "password": "xffatp",
        "email": "cfranklyn4@cornell.edu",
        "role": "teacher",
        "teacherData": {
            "name": "Clemmy",
            "lastName": "Franklyn",
            "age": 23,
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "math"
        }
    }, {
        "userName": "cdrivers5",
        "password": "JGI5EHAVJMe",
        "email": "cdrivers5@cnn.com",
        "role": "teacher",
        "teacherData": {
            "name": "Codi",
            "lastName": "Drivers",
            "age": 18,
            "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "history"
        }
    }, {
        "userName": "wdrillingcourt6",
        "password": "8eBhGHA",
        "email": "wdrillingcourt6@youku.com",
        "role": "teacher",
        "teacherData": {
            "name": "Wilton",
            "lastName": "Drillingcourt",
            "age": 30,
            "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "science"
        }
    }, {
        "userName": "abeek7",
        "password": "KWHKSdN0an",
        "email": "abeek7@sbwire.com",
        "role": "teacher",
        "teacherData": {
            "name": "Arabel",
            "lastName": "Beek",
            "age": 23,
            "description": "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "physical education"
        }
    }, {
        "userName": "sprall8",
        "password": "40JzIJ5O",
        "email": "sprall8@bluehost.com",
        "role": "teacher",
        "teacherData": {
            "name": "Scarlett",
            "lastName": "Prall",
            "age": 30,
            "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "music"
        }
    }, {
        "userName": "mdron9",
        "password": "x0KiJH",
        "email": "mdron9@blogspot.com",
        "role": "teacher",
        "teacherData": {
            "name": "Michal",
            "lastName": "Dron",
            "age": 28,
            "description": "Suspendisse ornare consequat lectus.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "special needs"
        }
     },
    {
        "userName": "floriea",
        "password": "VomMG8Apd",
        "email": "floriea@yahoo.co.jp",
        "role": "teacher",
        "teacherData": {
            "name": "Faulkner",
            "lastName": "Lorie",
            "age": 21,
            "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "music"
        }
    }, {
        "userName": "bforrestillb",
        "password": "ORjaSGUGi",
        "email": "bforrestillb@joomla.org",
        "role": "teacher",
        "teacherData": {
            "name": "Bernadine",
            "lastName": "Forrestill",
            "age": 29,
            "description": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "english"
        }
    }, {
        "userName": "koxenhamc",
        "password": "k9hqtQzAOe7N",
        "email": "koxenhamc@tiny.cc",
        "role": "teacher",
        "teacherData": {
            "name": "Kayle",
            "lastName": "Oxenham",
            "age": 21,
            "description": "Nulla justo.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "special needs"
        }
    }, {
        "userName": "kbonnickd",
        "password": "J4xXfZbRhcto",
        "email": "kbonnickd@nps.gov",
        "role": "teacher",
        "teacherData": {
            "name": "Kimberly",
            "lastName": "Bonnick",
            "age": 23,
            "description": "Proin eu mi.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "physical education"
        }
    }, {
        "userName": "phankarde",
        "password": "Kd15Y7O",
        "email": "phankarde@istockphoto.com",
        "role": "teacher",
        "teacherData": {
            "name": "Paige",
            "lastName": "Hankard",
            "age": 20,
            "description": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "spanish"
        }
    }, {
        "userName": "fjotchamf",
        "password": "y2LjKI",
        "email": "fjotchamf@blinklist.com",
        "role": "teacher",
        "teacherData": {
            "name": "Ferdie",
            "lastName": "Jotcham",
            "age": 29,
            "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "math"
        }
    }, {
        "userName": "dmiddlewickg",
        "password": "4U6ZRgER",
        "email": "dmiddlewickg@printfriendly.com",
        "role": "teacher",
        "teacherData": {
            "name": "Danita",
            "lastName": "Middlewick",
            "age": 22,
            "description": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "art"
        }
    }, {
        "userName": "mpondeh",
        "password": "OWLisbid",
        "email": "mpondeh@unc.edu",
        "role": "teacher",
        "teacherData": {
            "name": "Martynne",
            "lastName": "Ponde",
            "age": 20,
            "description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "spanish"
        }
    }, {
        "userName": "odaveyi",
        "password": "rOaABs",
        "email": "odaveyi@icq.com",
        "role": "teacher",
        "teacherData": {
            "name": "Orrin",
            "lastName": "Davey",
            "age": 19,
            "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "special needs"
        }
    }, {
        "userName": "lblakesleej",
        "password": "o2AkGuqW",
        "email": "lblakesleej@altervista.org",
        "role": "teacher",
        "teacherData": {
            "name": "Leda",
            "lastName": "Blakeslee",
            "age": 27,
            "description": "Duis ac nibh.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "history"
        }
    }, {
        "userName": "rlaurentyk",
        "password": "MudSEYv6Skhh",
        "email": "rlaurentyk@cloudflare.com",
        "role": "teacher",
        "teacherData": {
            "name": "Richy",
            "lastName": "Laurenty",
            "age": 19,
            "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "art"
        }
    }, {
        "userName": "ttarttl",
        "password": "VbHaSg2Dcvfa",
        "email": "ttarttl@etsy.com",
        "role": "teacher",
        "teacherData": {
            "name": "Trixi",
            "lastName": "Tartt",
            "age": 30,
            "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "special needs"
        }
    }, {
        "userName": "ugellm",
        "password": "euqKcAXRU",
        "email": "ugellm@people.com.cn",
        "role": "teacher",
        "teacherData": {
            "name": "Uriah",
            "lastName": "Gell",
            "age": 27,
            "description": "Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "physical education"
        }
    }, {
        "userName": "biddinsn",
        "password": "a9SBgWJ7d9",
        "email": "biddinsn@google.es",
        "role": "teacher",
        "teacherData": {
            "name": "Brod",
            "lastName": "Iddins",
            "age": 29,
            "description": "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "math"
        }
    }, {
        "userName": "ssilvertono",
        "password": "hpkJ6Zi",
        "email": "ssilvertono@nytimes.com",
        "role": "teacher",
        "teacherData": {
            "name": "Saw",
            "lastName": "Silverton",
            "age": 26,
            "description": "Nulla tellus.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "history"
        }
    }, {
        "userName": "akillwickp",
        "password": "411PTTyn",
        "email": "akillwickp@stumbleupon.com",
        "role": "teacher",
        "teacherData": {
            "name": "Addison",
            "lastName": "Killwick",
            "age": 19,
            "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "history"
        }
    }, {
        "userName": "vdunstoneq",
        "password": "ICKfuD",
        "email": "vdunstoneq@deviantart.com",
        "role": "teacher",
        "teacherData": {
            "name": "Vince",
            "lastName": "Dunstone",
            "age": 27,
            "description": "Cras pellentesque volutpat dui.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "art"
        }
    }, {
        "userName": "lwannesr",
        "password": "hIdXD5",
        "email": "lwannesr@cornell.edu",
        "role": "teacher",
        "teacherData": {
            "name": "Lorianna",
            "lastName": "Wannes",
            "age": 18,
            "description": "Phasellus sit amet erat.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "science"
        }
    }, {
        "userName": "rdradeys",
        "password": "oBXoR9i3T",
        "email": "rdradeys@list-manage.com",
        "role": "teacher",
        "teacherData": {
            "name": "Ronna",
            "lastName": "Dradey",
            "age": 22,
            "description": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "physical education"
        }
    }, {
        "userName": "fbinehamt",
        "password": "UmC5oJ2YH1",
        "email": "fbinehamt@geocities.com",
        "role": "teacher",
        "teacherData": {
            "name": "Florencia",
            "lastName": "Bineham",
            "age": 24,
            "description": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "special needs"
        }
    }, {
        "userName": "mcadellu",
        "password": "QbySqac",
        "email": "mcadellu@narod.ru",
        "role": "teacher",
        "teacherData": {
            "name": "Mandel",
            "lastName": "Cadell",
            "age": 25,
            "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "math"
        }
    }, {
        "userName": "heptonv",
        "password": "IpVXLg",
        "email": "heptonv@scribd.com",
        "role": "teacher",
        "teacherData": {
            "name": "Hansiain",
            "lastName": "Epton",
            "age": 25,
            "description": "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "science"
        }
    }, {
        "userName": "ladamecw",
        "password": "Vw6m17Egpk8",
        "email": "ladamecw@digg.com",
        "role": "teacher",
        "teacherData": {
            "name": "Lief",
            "lastName": "Adamec",
            "age": 26,
            "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "special needs"
        }
    }, {
        "userName": "jvanwaadenburgx",
        "password": "wkeSVi9xgY5f",
        "email": "jvanwaadenburgx@wiley.com",
        "role": "teacher",
        "teacherData": {
            "name": "Jenn",
            "lastName": "Van Waadenburg",
            "age": 21,
            "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "spanish"
        }
    }, {
        "userName": "wladely",
        "password": "QbuC0R",
        "email": "wladely@wp.com",
        "role": "teacher",
        "teacherData": {
            "name": "Wilone",
            "lastName": "Ladel",
            "age": 23,
            "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "math"
        }
    }, {
        "userName": "ghardemanz",
        "password": "MCcqAB5",
        "email": "ghardemanz@tripadvisor.com",
        "role": "teacher",
        "teacherData": {
            "name": "Giffie",
            "lastName": "Hardeman",
            "age": 24,
            "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "english"
        }
    }, {
        "userName": "slawfull10",
        "password": "cixphugYCndd",
        "email": "slawfull10@dot.gov",
        "role": "teacher",
        "teacherData": {
            "name": "Shandy",
            "lastName": "Lawfull",
            "age": 25,
            "description": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "art"
        }
    }, {
        "userName": "nlaydon11",
        "password": "m8OW5LeU",
        "email": "nlaydon11@europa.eu",
        "role": "teacher",
        "teacherData": {
            "name": "Natka",
            "lastName": "Laydon",
            "age": 22,
            "description": "Etiam faucibus cursus urna.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "math"
        }
    }, {
        "userName": "rblaes12",
        "password": "Hfe525DQ6",
        "email": "rblaes12@accuweather.com",
        "role": "teacher",
        "teacherData": {
            "name": "Reeta",
            "lastName": "Blaes",
            "age": 27,
            "description": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "spanish"
        }
    }, {
        "userName": "cantoniades13",
        "password": "AE4I3wCFo",
        "email": "cantoniades13@businesswire.com",
        "role": "teacher",
        "teacherData": {
            "name": "Correy",
            "lastName": "Antoniades",
            "age": 24,
            "description": "Nunc nisl.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "history"
        }
    }, {
        "userName": "rrodolf14",
        "password": "3AHGjCD6q",
        "email": "rrodolf14@go.com",
        "role": "teacher",
        "teacherData": {
            "name": "Rossy",
            "lastName": "Rodolf",
            "age": 18,
            "description": "Suspendisse potenti.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "music"
        }
    }, {
        "userName": "kduckit15",
        "password": "3tYOtihaviI",
        "email": "kduckit15@hhs.gov",
        "role": "teacher",
        "teacherData": {
            "name": "Korney",
            "lastName": "Duckit",
            "age": 25,
            "description": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "history"
        }
    }, {
        "userName": "rcromb16",
        "password": "9ETEoE3gVRcJ",
        "email": "rcromb16@vimeo.com",
        "role": "teacher",
        "teacherData": {
            "name": "Reider",
            "lastName": "Cromb",
            "age": 20,
            "description": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "art"
        }
    }, {
        "userName": "atufts17",
        "password": "a7zz5nD",
        "email": "atufts17@shutterfly.com",
        "role": "teacher",
        "teacherData": {
            "name": "Augustine",
            "lastName": "Tufts",
            "age": 30,
            "description": "Nam tristique tortor eu pede.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "history"
        }
    }, {
        "userName": "gspellsworth18",
        "password": "x9Vqeh",
        "email": "gspellsworth18@delicious.com",
        "role": "teacher",
        "teacherData": {
            "name": "Gina",
            "lastName": "Spellsworth",
            "age": 30,
            "description": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "music"
        }
    }, {
        "userName": "lperkinson19",
        "password": "KK567No4W",
        "email": "lperkinson19@cbc.ca",
        "role": "teacher",
        "teacherData": {
            "name": "Lavinia",
            "lastName": "Perkinson",
            "age": 24,
            "description": "Praesent blandit. Nam nulla.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "math"
        }
    }, {
        "userName": "vmaccartney1a",
        "password": "AsqtUh",
        "email": "vmaccartney1a@vimeo.com",
        "role": "teacher",
        "teacherData": {
            "name": "Vincent",
            "lastName": "MacCartney",
            "age": 20,
            "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "special needs"
        }
    }, {
        "userName": "cyerbury1b",
        "password": "T4EmSZERPF",
        "email": "cyerbury1b@4shared.com",
        "role": "teacher",
        "teacherData": {
            "name": "Cyndy",
            "lastName": "Yerbury",
            "age": 29,
            "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "art"
        }
    }, {
        "userName": "gmartyntsev1c",
        "password": "hvrdkyUMDh",
        "email": "gmartyntsev1c@ucla.edu",
        "role": "teacher",
        "teacherData": {
            "name": "Glad",
            "lastName": "Martyntsev",
            "age": 26,
            "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "special needs"
        }
    }, {
        "userName": "lvala1d",
        "password": "eXKinD",
        "email": "lvala1d@mlb.com",
        "role": "teacher",
        "teacherData": {
            "name": "Lusa",
            "lastName": "Vala",
            "age": 20,
            "description": "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
            "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjKHF1jlr42E1nFKqKBlbqlEaIlI3j86Fag&usqp=CAU",
            "subject": "math"
        }
    }
    , {
        "userName": "bnijssen0",
        "password": "a05ktVKmIqm",
        "email": "bnijssen0@hp.com",
        "role": "student",
        "studentData": {
            "name": "Brandy",
            "lastName": "Wasielewski",
            "age": 17,
            "description": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
            "course": "primary school",
            "interests": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
            "legalTutor": {
                "tutorName": "bnijssen0",
                "tutorLastName": "Nijssen",
                "personalId": "37211"
            }
        }
    }, {
        "userName": "lharcase1",
        "password": "yfCj4R92LeF",
        "email": "lharcase1@typepad.com",
        "role": "student",
        "studentData": {
            "name": "Lorri",
            "lastName": "Chadburn",
            "age": 12,
            "description": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
            "course": "special education",
            "legalTutor": {
                "tutorName": "lharcase1",
                "tutorLastName": "Harcase",
                "personalId": "7"
            }
        }
    }, {
        "userName": "nberntsson2",
        "password": "nwZe4fWCe5E",
        "email": "nberntsson2@twitter.com",
        "role": "student",
        "studentData": {
            "name": "Nicola",
            "lastName": "Sanchis",
            "age": 8,
            "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "course": "primary school",
            "legalTutor": {
                "tutorName": "nberntsson2",
                "tutorLastName": "Berntsson",
                "personalId": "099"
            }
        }
    }, {
        "userName": "kandor3",
        "password": "JJa9kf",
        "email": "kandor3@samsung.com",
        "role": "student",
        "studentData": {
            "name": "Koral",
            "lastName": "Rodell",
            "age": 13,
            "description": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "course": "high school",
            "interests": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
            "legalTutor": {
                "tutorName": "kandor3",
                "tutorLastName": "Andor",
                "personalId": "3372"
            }
        }
    }, {
        "userName": "prabbage4",
        "password": "HOgXvf",
        "email": "prabbage4@cisco.com",
        "role": "student",
        "studentData": {
            "name": "Phil",
            "lastName": "Aitchison",
            "age": 11,
            "description": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
            "course": "special education",
            "interests": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
            "legalTutor": {
                "tutorName": "prabbage4",
                "tutorLastName": "Rabbage",
                "personalId": "895"
            }
        }
    },
    {
        "userName": "tbissatt5",
        "password": "xNWjSYK",
        "email": "tbissatt5@ow.ly",
        "role": "student",
        "studentData": {
            "name": "Tabb",
            "lastName": "Redier",
            "age": 14,
            "description": "Etiam justo. Etiam pretium iaculis justo.",
            "course": "primary school",
            "interests": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
            "legalTutor": {
                "tutorName": "tbissatt5",
                "tutorLastName": "Bissatt",
                "personalId": "1"
            }
        }
    }, {
        "userName": "pbruntje6",
        "password": "oEottersMK6D",
        "email": "pbruntje6@is.gd",
        "role": "student",
        "studentData": {
            "name": "Peterus",
            "lastName": "Mutton",
            "age": 7,
            "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
            "course": "special education",
            "legalTutor": {
                "tutorName": "pbruntje6",
                "tutorLastName": "Bruntje",
                "personalId": "0"
            }
        }
    }, {
        "userName": "lbahls7",
        "password": "3p2jyKXtd1A",
        "email": "lbahls7@chron.com",
        "role": "student",
        "studentData": {
            "name": "Lucius",
            "lastName": "Philipsson",
            "age": 14,
            "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
            "course": "high school",
            "interests": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
            "legalTutor": {
                "tutorName": "lbahls7",
                "tutorLastName": "Bahls",
                "personalId": "9922"
            }
        }
    }, {
        "userName": "mscahill8",
        "password": "q9YSVr",
        "email": "mscahill8@sciencedirect.com",
        "role": "student",
        "studentData": {
            "name": "Maxy",
            "lastName": "Franck",
            "age": 13,
            "description": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
            "course": "high school",
            "legalTutor": {
                "tutorName": "mscahill8",
                "tutorLastName": "Scahill",
                "personalId": "73569"
            }
        }
    }, {
        "userName": "cabba9",
        "password": "wctlRYkHxg",
        "email": "cabba9@ameblo.jp",
        "role": "student",
        "studentData": {
            "name": "Cyrus",
            "lastName": "Iskowicz",
            "age": 6,
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
            "course": "high school",
            "interests": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
            "legalTutor": {
                "tutorName": "cabba9",
                "tutorLastName": "Abba",
                "personalId": "0675"
            }
        }
    }, {
        "userName": "cmallatratta",
        "password": "h5jv8u",
        "email": "cmallatratta@java.com",
        "role": "student",
        "studentData": {
            "name": "Cleopatra",
            "lastName": "Allnutt",
            "age": 8,
            "description": "Vestibulum rutrum rutrum neque.",
            "course": "special education",
            "interests": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "legalTutor": {
                "tutorName": "cmallatratta",
                "tutorLastName": "Mallatratt",
                "personalId": "7"
            }
        }
    }, {
        "userName": "mmcgorleyb",
        "password": "wsFQvPAzP",
        "email": "mmcgorleyb@1und1.de",
        "role": "student",
        "studentData": {
            "name": "Marillin",
            "lastName": "Hardisty",
            "age": 11,
            "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            "course": "special education",
            "interests": "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
            "legalTutor": {
                "tutorName": "mmcgorleyb",
                "tutorLastName": "Mc Gorley",
                "personalId": "18"
            }
        }
    }, {
        "userName": "lcornellc",
        "password": "9RBGQ8WZ",
        "email": "lcornellc@qq.com",
        "role": "student",
        "studentData": {
            "name": "Linnell",
            "lastName": "Foulds",
            "age": 8,
            "description": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
            "course": "primary school",
            "legalTutor": {
                "tutorName": "lcornellc",
                "tutorLastName": "Cornell",
                "personalId": "7"
            }
        }
    }, {
        "userName": "idadleyd",
        "password": "Xp2z4mcBYhHt",
        "email": "idadleyd@ow.ly",
        "role": "student",
        "studentData": {
            "name": "Israel",
            "lastName": "Lowdham",
            "age": 10,
            "description": "Suspendisse accumsan tortor quis turpis.",
            "course": "primary school",
            "interests": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
            "legalTutor": {
                "tutorName": "idadleyd",
                "tutorLastName": "Dadley",
                "personalId": "135"
            }
        }
    }, {
        "userName": "jdenyakine",
        "password": "1S5Tb8VT",
        "email": "jdenyakine@behance.net",
        "role": "student",
        "studentData": {
            "name": "Jeremiah",
            "lastName": "Van der Spohr",
            "age": 14,
            "description": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
            "course": "special education",
            "legalTutor": {
                "tutorName": "jdenyakine",
                "tutorLastName": "Denyakin",
                "personalId": "998"
            }
        }
    }, {
        "userName": "yminichillof",
        "password": "pTtxdK",
        "email": "yminichillof@irs.gov",
        "role": "student",
        "studentData": {
            "name": "Yelena",
            "lastName": "Scading",
            "age": 6,
            "description": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
            "course": "special education",
            "interests": "Etiam justo. Etiam pretium iaculis justo.",
            "legalTutor": {
                "tutorName": "yminichillof",
                "tutorLastName": "Minichillo",
                "personalId": "071"
            }
        }
    }, {
        "userName": "lpessoltg",
        "password": "2MBWg7z8",
        "email": "lpessoltg@toplist.cz",
        "role": "student",
        "studentData": {
            "name": "Lorilee",
            "lastName": "Wyldbore",
            "age": 6,
            "description": "Phasellus in felis. Donec semper sapien a libero.",
            "course": "special education",
            "legalTutor": {
                "tutorName": "lpessoltg",
                "tutorLastName": "Pessolt",
                "personalId": "5"
            }
        }
    }, {
        "userName": "gscatcharh",
        "password": "Pm2Xg3Q0",
        "email": "gscatcharh@youku.com",
        "role": "student",
        "studentData": {
            "name": "Gerik",
            "lastName": "Markham",
            "age": 14,
            "description": "Donec quis orci eget orci vehicula condimentum.",
            "course": "high school",
            "interests": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
            "legalTutor": {
                "tutorName": "gscatcharh",
                "tutorLastName": "Scatchar",
                "personalId": "8"
            }
        }
    }, {
        "userName": "smccurleyi",
        "password": "8eP2PRS",
        "email": "smccurleyi@sbwire.com",
        "role": "student",
        "studentData": {
            "name": "Suzanna",
            "lastName": "Brimson",
            "age": 12,
            "description": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
            "course": "special education",
            "legalTutor": {
                "tutorName": "smccurleyi",
                "tutorLastName": "McCurley",
                "personalId": "7"
            }
        }
    }, {
        "userName": "mrycej",
        "password": "vEScZmFj9",
        "email": "mrycej@miibeian.gov.cn",
        "role": "student",
        "studentData": {
            "name": "My",
            "lastName": "Fones",
            "age": 11,
            "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
            "course": "primary school",
            "interests": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
            "legalTutor": {
                "tutorName": "mrycej",
                "tutorLastName": "Ryce",
                "personalId": "81"
            }
        }
    }, {
        "userName": "fbrackenburyk",
        "password": "22Md34GmeOS",
        "email": "fbrackenburyk@ucoz.ru",
        "role": "student",
        "studentData": {
            "name": "Fanya",
            "lastName": "Gammon",
            "age": 11,
            "description": "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
            "course": "high school",
            "interests": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
            "legalTutor": {
                "tutorName": "fbrackenburyk",
                "tutorLastName": "Brackenbury",
                "personalId": "9086"
            }
        }
    }, {
        "userName": "chartshornel",
        "password": "7FE95bYsloB",
        "email": "chartshornel@wunderground.com",
        "role": "student",
        "studentData": {
            "name": "Coriss",
            "lastName": "Oakenfall",
            "age": 10,
            "description": "Etiam faucibus cursus urna.",
            "course": "high school",
            "interests": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
            "legalTutor": {
                "tutorName": "chartshornel",
                "tutorLastName": "Hartshorne",
                "personalId": "8"
            }
        }
    }, {
        "userName": "kblakeboroughm",
        "password": "6OkKtHfeh",
        "email": "kblakeboroughm@intel.com",
        "role": "student",
        "studentData": {
            "name": "Kristan",
            "lastName": "Vossing",
            "age": 8,
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            "course": "primary school",
            "legalTutor": {
                "tutorName": "kblakeboroughm",
                "tutorLastName": "Blakeborough",
                "personalId": "05"
            }
        }
    }, {
        "userName": "kbentermann",
        "password": "BK7Q0n2lRy",
        "email": "kbentermann@cpanel.net",
        "role": "student",
        "studentData": {
            "name": "Kean",
            "lastName": "Janovsky",
            "age": 7,
            "description": "Mauris lacinia sapien quis libero.",
            "course": "primary school",
            "legalTutor": {
                "tutorName": "kbentermann",
                "tutorLastName": "Benterman",
                "personalId": "8789"
            }
        }
    }, {
        "userName": "rdenisardo",
        "password": "Z15ypX",
        "email": "rdenisardo@cisco.com",
        "role": "student",
        "studentData": {
            "name": "Rachel",
            "lastName": "Grason",
            "age": 7,
            "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "course": "high school",
            "interests": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "legalTutor": {
                "tutorName": "rdenisardo",
                "tutorLastName": "Denisard",
                "personalId": "01613"
            }
        }
    }, {
        "userName": "lteaserp",
        "password": "Rxtofm4iDI0",
        "email": "lteaserp@merriam-webster.com",
        "role": "student",
        "studentData": {
            "name": "Lemmy",
            "lastName": "Gutierrez",
            "age": 12,
            "description": "Duis bibendum.",
            "course": "primary school",
            "legalTutor": {
                "tutorName": "lteaserp",
                "tutorLastName": "Teaser",
                "personalId": "22"
            }
        }
    }, {
        "userName": "csimonyq",
        "password": "9xWPGO",
        "email": "csimonyq@usa.gov",
        "role": "student",
        "studentData": {
            "name": "Carline",
            "lastName": "Wellington",
            "age": 8,
            "description": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
            "course": "primary school",
            "interests": "Duis aliquam convallis nunc.",
            "legalTutor": {
                "tutorName": "csimonyq",
                "tutorLastName": "Simony",
                "personalId": "90079"
            }
        }
    }, {
        "userName": "kfurmanr",
        "password": "yoql8fsy",
        "email": "kfurmanr@vistaprint.com",
        "role": "student",
        "studentData": {
            "name": "Kayla",
            "lastName": "Nowland",
            "age": 8,
            "description": "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
            "course": "high school",
            "legalTutor": {
                "tutorName": "kfurmanr",
                "tutorLastName": "Furman",
                "personalId": "294"
            }
        }
    }, {
        "userName": "mkobieras",
        "password": "3YB6bGf",
        "email": "mkobieras@aboutads.info",
        "role": "student",
        "studentData": {
            "name": "Millard",
            "lastName": "Polk",
            "age": 9,
            "description": "Pellentesque ultrices mattis odio. Donec vitae nisi.",
            "course": "primary school",
            "legalTutor": {
                "tutorName": "mkobieras",
                "tutorLastName": "Kobiera",
                "personalId": "4632"
            }
        }
    }, {
        "userName": "eoduilleaint",
        "password": "QK2ClpC",
        "email": "eoduilleaint@is.gd",
        "role": "student",
        "studentData": {
            "name": "Eugenius",
            "lastName": "Cypler",
            "age": 9,
            "description": "Aliquam sit amet diam in magna bibendum imperdiet.",
            "course": "primary school",
            "interests": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
            "legalTutor": {
                "tutorName": "eoduilleaint",
                "tutorLastName": "O'Duilleain",
                "personalId": "57676"
            }
        }
        
   }
]

//como archivo aparte de la app, seeds hay que ejecutarlo en la consola manualmente para que introduzca los datos en la BBDD
//node users.seeds.js

User
    .create(users)
    .then(users => console.log(`se han creado ${users.length} usuarios`))
    .catch(err => console.log('tenemos un error:', err))



// la desconexión no se dberia hacer aquí... porque seeds es un archivo aparte del server