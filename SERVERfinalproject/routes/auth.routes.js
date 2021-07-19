const router = require("express").Router();

//SIGNED IN

router.get('/signedIn', (req, res) => {
    res.send('usuario registrado')
})




//PROFILE-LOGGED IN
router.get('/profile', (req, res) => {
    res.send('este seria el perfil, una vez está logeado')
    console.log('perfil')
})

module.exports = router

