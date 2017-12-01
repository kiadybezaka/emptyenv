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
        $(document).on('click', 'a[href^="#"]', function (event) {
                event.preventDefault();

                $('html, body').animate({
                        scrollTop: $($.attr(this, 'href')).offset().top - 150
                }, 800);
        });
}
