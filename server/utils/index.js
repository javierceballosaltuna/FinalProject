const mongoose = require('mongoose')

module.exports = {
    checkMongooseError: err => {
        if (err instanceof mongoose.Error.ValidationError) {
            return Object.values(err.errors).map(elm => elm.message).join(`||`)
        } else if (err.code === 11000) {
            console.log(err)
            return 'This user is already registered'
        }
    }
}