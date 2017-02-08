var alertify = require('alertifyjs');
var JsTest = function() {

    //////////////////////
    // PRIVATE VARIABLE //
    //////////////////////

    var instance = this;


    //////////////////////
    // PUBLIC VARIABLES //
    //////////////////////

    instance.jsTestBtn = '.js-test-btn';

    /**
     * @function testJs
     * @description Just for testing Jquery
     * @memberOf JsTest
     * @public
     *
     * @param {string}
     */

    var testJs = function() {
      console.log('Javascript cl-test ok');
    }
    ////////////////////
    // PUBLIC METHODS //
    ////////////////////
    instance.testJs = testJs;
}
///////////////
// NAMESPACE //
///////////////
module.exports = new JsTest();


