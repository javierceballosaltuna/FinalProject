const mongoose = require("mongoose") // mongoose no lo necesitamos aqui
const TeachingMaterial = require('../models/TeachingMaterial.model') // olo se necesita el modelo y los require de arriba del todo
mongoose.connect(`mongodb+srv://pablojavi:Pablojavi@finalprojectironhack.eyx6s.mongodb.net/teacherproject`)//y esto tampoco se necesita

const teachingMaterials = [{
    "name": "EuNibhQuisque.xls",
    "url": "#",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    "subject": "math"
}, {
        "name": "TortorQuisTurpis.ppt",
        "url": "#",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
        "subject": "math"
    }, {
        "name": "SitAmetConsectetuer.avi",
        "url": "#",
        "description": "Nullam varius. Nulla facilisi.",
        "subject": "science"
    }, {
        "name": "Lacinia.avi",
        "url": "#",
        "description": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        "subject": "science"
    }, {
        "name": "Amet.mp3",
        "url": "#",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "subject": "science"
    }, {
        "name": "JustoEtiamPretium.mpeg",
        "url": "#",
        "description": "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "subject": "special needs"
    }, {
        "name": "Nunc.avi",
        "url": "#",
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        "subject": "spanish"
    }, {
        "name": "Lectus.jpeg",
        "url": "#",
        "description": "Morbi non lectus.",
        "subject": "music"
    }, {
        "name": "HabitassePlateaDictumst.mp3",
        "url": "#",
        "description": "Nunc rhoncus dui vel sem.",
        "subject": "english"
    }, {
        "name": "QuisqueId.xls",
        "url": "#",
        "description": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
        "subject": "music"
    }, {
        "name": "TellusNullaUt.avi",
        "url": "#",
        "description": "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
        "subject": "music"
    }, {
        "name": "Augue.xls",
        "url": "#",
        "description": "Fusce consequat.",
        "subject": "math"
    }, {
        "name": "Odio.jpeg",
        "url": "#",
        "description": "Morbi a ipsum. Integer a nibh. In quis justo.",
        "subject": "math"
    }, {
        "name": "SapienCursusVestibulum.jpeg",
        "url": "#",
        "description": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        "subject": "physical education"
    }, {
        "name": "JustoInHac.doc",
        "url": "#",
        "description": "Nulla nisl. Nunc nisl.",
        "subject": "math"
    }, {
        "name": "EnimLoremIpsum.xls",
        "url": "#",
        "description": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "subject": "science"
    }, {
        "name": "Donec.tiff",
        "url": "#",
        "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        "subject": "physical education"
    }, {
        "name": "NecEuismodScelerisque.ppt",
        "url": "#",
        "description": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "subject": "math"
    }, {
        "name": "VestibulumAnteIpsum.mpeg",
        "url": "#",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "subject": "spanish"
    }, {
        "name": "OdioCondimentum.mov",
        "url": "#",
        "description": "Proin interdum mauris non ligula pellentesque ultrices.",
        "subject": "spanish"
    }, {
        "name": "Laoreet.mpeg",
        "url": "#",
        "description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
        "subject": "physical education"
    }, {
        "name": "AcNullaSed.tiff",
        "url": "#",
        "description": "In hac habitasse platea dictumst.",
        "subject": "english"
    }, {
        "name": "AtLorem.doc",
        "url": "#",
        "description": "Duis mattis egestas metus. Aenean fermentum.",
        "subject": "music"
    }, {
        "name": "AliquamNon.mp3",
        "url": "#",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
        "subject": "music"
    }, {
        "name": "IdMassaId.tiff",
        "url": "#",
        "description": "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
        "subject": "english"
    }, {
        "name": "TellusNisiEu.txt",
        "url": "#",
        "description": "Integer a nibh. In quis justo.",
        "subject": "math"
    }, {
        "name": "Mauris.doc",
        "url": "#",
        "description": "Etiam justo. Etiam pretium iaculis justo.",
        "subject": "spanish"
    }, {
        "name": "SedAnteVivamus.ppt",
        "url": "#",
        "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
        "subject": "special needs"
    }, {
        "name": "Dignissim.ppt",
        "url": "#",
        "description": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        "subject": "english"
    }, {
        "name": "Nisl.xls",
        "url": "#",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
        "subject": "math"
    }, {
        "name": "RisusDapibusAugue.mp3",
        "url": "#",
        "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
        "subject": "history"
    }, {
        "name": "NullaPede.gif",
        "url": "#",
        "description": "Aliquam non mauris. Morbi non lectus.",
        "subject": "special needs"
    }, {
        "name": "AnteIpsumPrimis.avi",
        "url": "#",
        "description": "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "subject": "math"
    }, {
        "name": "Erat.tiff",
        "url": "#",
        "description": "Donec ut mauris eget massa tempor convallis.",
        "subject": "special needs"
    }, {
        "name": "EtMagnisDis.txt",
        "url": "#",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
        "subject": "math"
    }, {
        "name": "Euismod.tiff",
        "url": "#",
        "description": "Maecenas pulvinar lobortis est.",
        "subject": "english"
    }, {
        "name": "SitAmet.avi",
        "url": "#",
        "description": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
        "subject": "math"
    }, {
        "name": "Convallis.pdf",
        "url": "#",
        "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
        "subject": "english"
    }, {
        "name": "Nulla.xls",
        "url": "#",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        "subject": "music"
    }, {
        "name": "OrciEgetOrci.avi",
        "url": "#",
        "description": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "subject": "math"
    }
]

TeachingMaterial
    .create(teachingMaterials)
    .then(materials => console.log(`se han creado ${materials.length} materials`))
    .catch(err => console.log('tenemos un error:', err))
