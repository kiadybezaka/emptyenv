var express = require('express');
var app = express();
var pages = require('../controllers/controllers');
module.exports = function (app) {
  app.get('/developpeur', pages.developpeur);
}
module.exports = function (app) {
  app.get('/testWs', pages.testWs);
}

