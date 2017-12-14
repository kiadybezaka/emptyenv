var _jsTest = require('./../classes/cl-test');
var slick = require('slick-carousel');
var simpleParallax = require('simple-parallax-jquery');
var lightbox = require('lightbox2');
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
  lightbox.option({
    showImageNumberLabel: true,
    albumLabel:	"Image %1 sur %2"
  })

  $('.lb-image').attr('alt','lightbox image');

  $('.lb-prev').append("<span class='hide-only'>no text</span>");

  $('.lb-next').append("<span class='hide-only'>no text</span>");

  $('.lb-cancel').append("<span class='hide-only'>no text</span>");

}
