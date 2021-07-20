module.exports = {
    isLoggedIn: (req, res, next) => {
        req.session.currentUser ? next() : res.status(500).json({ code: 500, message: 'Log-in needed' })
    },
    checkRoles: (...allowedRoles) => (req, res, next) => {          // REST PARAMETERS
        allowedRoles.includes(req.session.currentUser.role) ? next() : res.status(500).json({ code: 500, message: 'Restringed area' })
    }
}