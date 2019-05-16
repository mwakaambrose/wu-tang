"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Responsible for only toyota cars
 */
var Toyota = function () {
  function Toyota() {
    _classCallCheck(this, Toyota);

    this.all = ["Caldina"];
  }

  /**
   * Should both have same signature as
   * as children so that they are interchangeable
   *
   * Liskov Substitution
   */


  _createClass(Toyota, [{
    key: "getAll",
    value: function getAll() {
      return this.all;
    }

    /**
     * Add a new toyota model to ensure this class is closed
     * for modifications but open for extension
     * @param name
     */

  }, {
    key: "addModel",
    value: function addModel(name) {
      this.all.push(name);
    }

    /**
     * Interface Segregation
     * The Interface Segregation Principle states that a client should
     * never be forced to implement an interface that it doesnt use.
     *
     * If coding to an interface, split interfaces upto a point where the classes
     * implementing them wouldn't be forced to have an empty implementation because they
     * don't use the contract(interface functions to be implemented)
     */

    /**
     * Dependency Inversion != Dependency Injection
     * High level modules should not depend upon low level modules, instead they should
     * rely on abstractions and not concretion. In other OOP languages, you'd do this by
     * coding to an interface.
     *
     * This allows us to decouple our code, instead of relying on strong
     * concretion and dependency (Hard coding)
     *
     * Eg house wiring(low level code) and wall outlets(interface) with e-gadgets, say TV (high level code)
     */

  }]);

  return Toyota;
}();

exports.default = Toyota;