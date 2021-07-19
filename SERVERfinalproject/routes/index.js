

module.exports = (app) => {
  app.use('/', require('./base.routes'));
  app.use('/', require('./auth.routes'));

};


//hacer index y pasar la ruta de inicio  a "BASE ROUTES"