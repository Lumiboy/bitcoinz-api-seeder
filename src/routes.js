const seed = require('./controllers/seed');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.redirect('/seed/combined');
  });
  app.get('/seed/combined', seed.combinedList);
  app.get('/seed/api', seed.apiList);
  app.get('/seed/bws', seed.bwsList);
};
