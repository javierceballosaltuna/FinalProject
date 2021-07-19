module.exports = (app) => {
<<<<<<< HEAD
  app.use('/', require('./base.routes'))

}
=======
  app.use('/', require('./base.routes'));
  app.use('/', require('./auth.routes'));

};


//hacer index y pasar la ruta de inicio  a "BASE ROUTES"
>>>>>>> 94b26848fd8fa4886e524217505717d8840ff95a
