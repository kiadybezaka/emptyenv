var _jsTest = require('./../classes/cl-test');
var slick = require('slick-carousel');
var simpleParallax = require('simple-parallax-jquery');
module.exports = function() {

    'use strict';

        $('.js-parallax').simpleParallax({ scale: '1.30', orientation: 'up' });
        $(_jsTest.jsTestBtn).on('click', function(e) {
                e.preventDefault();
                _jsTest.testWsFunc();
        })
}
