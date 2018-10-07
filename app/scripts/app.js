// global declarations
global.jQuery = require('jquery');
global.$ = require('jquery');

// Required modules
var _jsSticky = require('./controllers/co-sticky');
var _jsGlobal = require('./controllers/co-global');

$( window ).on( "load", function () {
  _jsSticky();
  _jsGlobal();
});


