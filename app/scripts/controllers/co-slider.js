
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
};
