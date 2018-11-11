var pages = require('../controllers/controllers');
module.exports = function (app) {
  app.get('/gallery', pages.gallery);
}

