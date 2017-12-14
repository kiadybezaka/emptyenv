
var slick = require('slick-carousel');
//var slick = require('../../../bower_components/slick-carousel/slick/slick');
var _sliders = require('../classes/cl-slider');

module.exports = function () {

  'use strict';


  ////////////////////////////////////////////
  //----- carousel for homepage banner ----//
  //////////////////////////////////////////
    var homeBanner = '.js-slider-banner';
    //initialize slick.js
    $(homeBanner).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      speed: 500,
      cssEase: 'linear',
      dots: false,
      center: true,
      infinite: true,
      arrows: false
    });
    //////////////////////////////////////
  //----- carousel for road slider ----//
  //////////////////////////////////////
    var roadSlider = '.js-slide-road';

    var fixBrokenAreaReference = function(className) {
    // fix the broken aria reference test.
      $(className).each(function() {
        const $slide = $(this);
        if ($slide.attr('aria-describedby')) { // ignore extra/cloned slides
          $(this).attr('id', $slide.attr('aria-describedby'));
        }
      });
    }

    //initialize slick.js
    $(roadSlider).slick({
      rows: 1,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      infinite: false,
      arrows: true
    });
    fixBrokenAreaReference('.section-road__item');
};
