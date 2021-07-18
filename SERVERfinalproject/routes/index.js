

module.exports = (app) => {
  app.use('/', require('./base.routes'));

};
//hacer index y pasar la ruta de inicio  a "BASE ROUTES"