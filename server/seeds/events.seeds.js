const mongoose = require("mongoose") // mongoose no lo necesitamos aqui
const Event = require('../models/Event.model') // olo se necesita el modelo y los require de arriba del todo
mongoose.connect(`mongodb+srv://pablojavi:Pablojavi@finalprojectironhack.eyx6s.mongodb.net/teacherproject`)//y esto tampoco se necesita

const events = [{
    "location": {
        "address": {
            "street": "9 Harbort Park",
            "zipCode": "38126",
            "city": "Memphis",
            "country": "United States"
        }
    },
    "date": "2020-07-29",
    "description": "Aenean sit amet justo.",
    "eventType": "individual"
}, {
        "location": {
            "address": {
                "street": "5 Talmadge Street",
                "zipCode": "32128",
                "city": "Daytona Beach",
                "country": "United States"
            }
        },
        "date": "2021-01-01",
        "description": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "59425 Gateway Junction",
                "zipCode": "4950-840",
                "city": "Pereiro",
                "country": "Portugal"
            }
        },
        "date": "2021-01-04",
        "description": "Nullam porttitor lacus at turpis.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "5 Melby Plaza",
                "zipCode": "2955-004",
                "city": "Pinhal Novo",
                "country": "Portugal"
            }
        },
        "date": "2020-12-19",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "10919 Summerview Parkway",
                "zipCode": "4730-264",
                "city": "Lanhas",
                "country": "Portugal"
            }
        },
        "date": "2021-03-18",
        "description": "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "7 High Crossing Avenue",
                "zipCode": "83484 CEDEX",
                "city": "Puget-sur-Argens",
                "country": "France"
            }
        },
        "date": "2021-03-23",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "030 Jenna Street",
                "zipCode": "44958 CEDEX 9",
                "city": "Nantes",
                "country": "France"
            }
        },
        "date": "2020-09-18",
        "description": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "97897 Moulton Court",
                "zipCode": "2835-496",
                "city": "Santo António da Charneca",
                "country": "Portugal"
            }
        },
        "date": "2021-01-29",
        "description": "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "1789 Garrison Park",
                "zipCode": "06182 CEDEX 2",
                "city": "Nice",
                "country": "France"
            }
        },
        "date": "2020-09-24",
        "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "9 Messerschmidt Avenue",
                "zipCode": "3025-419",
                "city": "São João do Campo",
                "country": "Portugal"
            }
        },
        "date": "2020-09-29",
        "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "25750 Main Junction",
                "zipCode": "75434 CEDEX 09",
                "city": "Paris 09",
                "country": "France"
            }
        },
        "date": "2020-09-25",
        "description": "In hac habitasse platea dictumst.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "564 Barby Crossing",
                "zipCode": "A41",
                "city": "Clogherhead",
                "country": "Ireland"
            }
        },
        "date": "2020-12-20",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "3311 Evergreen Alley",
                "zipCode": "4480-493",
                "city": "Touguinha",
                "country": "Portugal"
            }
        },
        "date": "2021-06-22",
        "description": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "41 Waxwing Avenue",
                "zipCode": "38066 CEDEX 2",
                "city": "Grenoble",
                "country": "France"
            }
        },
        "date": "2020-12-06",
        "description": "Proin risus.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "997 Melby Place",
                "zipCode": "32010 CEDEX",
                "city": "Auch",
                "country": "France"
            }
        },
        "date": "2021-02-01",
        "description": "Praesent blandit. Nam nulla.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "0165 Glacier Hill Avenue",
                "zipCode": "90805",
                "city": "Long Beach",
                "country": "United States"
            }
        },
        "date": "2020-08-01",
        "description": "Sed sagittis.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "17 Banding Lane",
                "zipCode": "2705-785",
                "city": "São João das Lampas",
                "country": "Portugal"
            }
        },
        "date": "2021-01-15",
        "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
        "eventType": "individual"
    }, {
        "location": {
            "address": {
                "street": "15237 Fairfield Plaza",
                "zipCode": "3070-385",
                "city": "Presa",
                "country": "Portugal"
            }
        },
        "date": "2021-08-17",
        "description": "Pellentesque at nulla. Suspendisse potenti.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "51233 Eastwood Junction",
                "zipCode": "22119",
                "city": "Merrifield",
                "country": "United States"
            }
        },
        "date": "2021-08-22",
        "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
        "eventType": "group"
    }, {
        "location": {
            "address": {
                "street": "501 Northport Parkway",
                "zipCode": "84104 CEDEX",
                "city": "Orange",
                "country": "France"
            }
        },
        "date": "2020-09-18",
        "description": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
        "eventType": "group"
    }
]

Event
    .create(events)
    .then(events => console.log(`se han creado ${events.length} events`))
    .catch(err => console.log('tenemos un error:', err))
