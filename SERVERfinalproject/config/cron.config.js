const CronJob = require('cron').CronJob
const Event = require('../models/Event.model')
const moment = require('moment')
//date-fns better library



const job = new CronJob('*/5 * * * *', () => {

    const today = Date.now()
    console.log(today)

    Event
        .updateMany({ "date": { '$lt': moment(today).format('YYYY-MM-DD[T00:00:00.000Z]') }, isActive: true }, { isActive: false })
        .then((response) => {
            res.json(response)
            console.log(response)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'Error comparing active and outdated events', err }))

}, null, true)

job.start()

module.exports = app => {

    app.use(CronJob(job))
}