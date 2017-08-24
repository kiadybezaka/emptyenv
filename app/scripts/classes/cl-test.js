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

    /**
   * @function testWsFunc
   * @description testWsFunc
  */
    var testWsFunc = function () {

      var webserviceUrl = '/testWs';

      $.ajax({
        url: webserviceUrl,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json',
        complete: function () {
          console.log('WS completed');
        },
        success: function (response) {
          console.log('WS success');
          if (response.Success === true) {

            console.log('WS success true');

          }
        },
        /*Display error message on error*/
        error: function () {
          console.log('Webservice error');
        }
      });
    };
    ////////////////////
    // PUBLIC METHODS //
    ////////////////////
    instance.testJs = testJs;
    instance.testWsFunc = testWsFunc;
}
///////////////
// NAMESPACE //
///////////////
module.exports = new JsTest();


