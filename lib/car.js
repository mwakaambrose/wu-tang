'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Car = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toyota = require('./toyota');

var _toyota2 = _interopRequireDefault(_toyota);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = exports.Car = function () {
    function Car() {
        _classCallCheck(this, Car);

        this.corolla = new _toyota2.default();
    }

    /**
     * Should both have same signature as
     * as children so that they are interchangeable
     */


    _createClass(Car, [{
        key: 'getAll',
        value: function getAll() {
            console.log(this.corolla.getAll());
        }
    }]);

    return Car;
}();