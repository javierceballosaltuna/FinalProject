const CronJob = require('cron').CronJob
const Event = require('../models/Event.model')
const moment = require('moment')

const job = new CronJob('*/5 * * * *', () => {

    const today = Date.now()
    

    Event
        .updateMany({ "date": { '$lt': moment(today).format('YYYY-MM-DD[T00:00:00.000Z]') }, isActive: true }, { isActive: false })
        .then(() =>  console.log('cron-update each 5 min'))
        .catch(err => console.log(err))
    //error res.json(response)=> RES IS NOT DEFINED, WHY??

}, null, true)

job.start()

module.exports = app => app.use(CronJob(job))