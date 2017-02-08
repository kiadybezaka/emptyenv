var express = require('express');
var app = express();
var pages = require('../controllers/controllers');
module.exports = function (app) {
  app.get('/other', pages.home);
}
