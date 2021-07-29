const session = require('express-session')
const MongoStore = require('connect-mongo')

module.exports = app => {
    app.use(
        session({
            secret: process.env.SESS_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                maxAge: 60000000000
            },
            store: MongoStore.create({
                mongoUrl: process.env.DB_REMOTE
            })
        })
    )
}