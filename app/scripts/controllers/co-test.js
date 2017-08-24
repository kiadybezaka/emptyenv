var _jsTest = require('./../classes/cl-test');

module.exports = function() {

    'use strict';

    $(_jsTest.jsTestBtn).on('click', function(e) {
        e.preventDefault();
        _jsTest.testWsFunc();
    })
}
