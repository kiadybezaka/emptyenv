/**
 * @class Sticky
 *
 * @constructor
 * @classdesc Events for sticky menus.
 * @param {array} [options] - Please provide documentation
 *
 * @example
 * new instance:
 *     var instance = new Sticky();
 */


var Sticky = function () {

  'use strict';

  //////////////////
  // PRIVATE VARS //
  //////////////////
  var instance          = this;
  
  /////////////////
  // PUBLIC VARS //
  /////////////////
  instance.headerSticky = $('.js-sticky-header');
  /////////////////////
  // PRIVATE METHODS //
  /////////////////////
  

  /**
   * @function scrollHandler
   * @description To add and remove sticky classes to menu and search bar. Also close the sidemenu if needed
   * @memberOf Sticky
   * @private
   *
   * @param {string} direction - The scroll direction
   * @param {integer} offset - The offset for the menu to appear
   * @param {string} element - The element to be made sticky
   */
  var scrollHandler = function(offset, element) {
    if ($(window).scrollTop() > offset) {
      $(element).addClass('sticky');
    } else {
      $(element).removeClass('sticky');
    }
  };

  /**
   * @function headerScroll
   * @description Sticky header functionality
   * @memberOf Sticky
   * @private
   *
   * @param {integer} offset - The offset for the menu to appear
   * @param {string} element - The element to be made sticky
   */
  var headerScroll = function(offset, element) {
    var previousScroll = 0;
    $(window).scroll( function () {
      var currentScroll = $(this).scrollTop();
      if (currentScroll > previousScroll) {
        //$(element).removeClass('sticky');
      } else {
        //scrollHandler(offset, element)
      }
      scrollHandler(offset, element)
      previousScroll = currentScroll;
    });
  };


  /**
   * @function initSticky
   * @description Initialize the sticky headers
   * @memberOf Sticky
   * @private
   */
  var initSticky = function () {
    var menuOffset;

    menuOffset = 60;

    if ((instance.headerSticky).length) {
      headerScroll(menuOffset,(instance.headerSticky));
    }
    
  };

  ////////////////////
  // PUBLIC METHODS //
  ////////////////////
  instance.initSticky     = initSticky;
};

///////////////
// PROTOTYPE //
///////////////
module.exports = new Sticky(); // send prototype to namespace
