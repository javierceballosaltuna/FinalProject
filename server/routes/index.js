module.exports = (app) => {
  
  app.use('/api/', require('./auth.routes'))
  app.use('/api/', require('./admin.routes'))
  app.use('/api/', require('./subjects.routes'))
  app.use('/api/profile', require('./profile.routes'))
  app.use('/api/events', require('./event.routes'))
  app.use('/api/resources', require('./teachingMaterials.routes'))
  app.use("/api/upload", require("./uploads.routes"))
  app.use('/api/admin', require('./admin.routes'))

}

