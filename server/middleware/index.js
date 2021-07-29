module.exports = {
    isLoggedIn: (req, res, next) => {
        console.log(req.session.currentUser)

        req.session.currentUser ? next() : res.status(401).json({ code: 401, message: 'Please, log-in' })
    },

    checkRoles: (...allowedRoles) => (req, res, next) => {
        allowedRoles.includes(req.session.currentUser.role) ? next() : res.status(401).json({ code: 401, message: 'Restringed area' })
    }
}