const session = require('express-session');
const MongoStore = require('connect-mongo');
module.exports = app => {
    app.use(
        session({
            secret: process.env.SESS_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                // sameSite: 'none',
                httpOnly: true,
                maxAge: 600000
            },
            store: MongoStore.create({
                mongoUrl: process.env.DB_REMOTE 
            })
        })
    );
};