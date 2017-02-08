// global declarations

global.jQuery = require('../../bower_components/jquery/dist/jquery');
global.$ = require('../../bower_components/jquery/dist/jquery');
/*var slick = require('../../bower_components/slick-carousel/slick/slick');*/
// // Required modules
var slick = require('slick-carousel');
var jsTest = require('./controllers/co-test');


$( window ).on( "load", function () {
  jsTest();
  $('.js-slide').slick();
});


