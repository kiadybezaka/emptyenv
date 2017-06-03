// global declarations

global.jQuery = require('jquery');
global.$ = require('jquery');
//global.jQuery = require('../../bower_components/jquery/dist/jquery');
//global.$ = require('../../bower_components/jquery/dist/jquery');

// Required modules
var slick = require('./controllers/co-slider');
var sticky = require('./controllers/co-sticky');
var jsTest = require('./controllers/co-test');


$( window ).on( "load", function () {
  slick();
  jsTest();
  sticky();;
});


