module.exports = (app) => {
  
  app.use('/', require('./auth.routes'))
  app.use('/', require('./user.routes'))
  app.use('/', require('./subjects.routes'))
  app.use('/events', require('./event.routes'))
  app.use('/resources', require('./teachingMaterials.routes'))

}

