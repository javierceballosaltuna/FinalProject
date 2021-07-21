module.exports = (app) => {
  
  app.use('/', require('./auth.routes'))
  app.use('/', require('./admin.routes'))
  app.use('/', require('./subjects.routes'))
  app.use('/profile', require('./profile.routes'))
  app.use('/events', require('./event.routes'))
  app.use('/resources', require('./teachingMaterials.routes'))
  app.use('/admin', require('./admin.routes'))

}

