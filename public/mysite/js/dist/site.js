(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  function Modal(modalId) {
    _classCallCheck(this, Modal);

    this.modalId = modalId;
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      return '\n      <div id="' + this.modalId + '" class="modal fade">\n        <div class="modal-dialog" role="document">\n          <div class="modal-content">\n            <div class="modal-header">\n              <h5 class="modal-title">Modal title</h5>\n              <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                <span aria-hidden="true">&times;</span>\n              </button>\n            </div>\n            <div class="modal-body">\n              <p>Modal body text goes here.</p>\n            </div>\n            <div class="modal-footer">\n              <button type="button" class="btn btn-primary">Save changes</button>\n              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    ';
    }
  }, {
    key: 'addToBody',
    value: function addToBody() {
      var str = this.render();
      $('body').append($(str));
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      $('#' + this.modalId).modal('toggle');
    }
  }]);

  return Modal;
}();

exports.default = Modal;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExampleClass = function ExampleClass() {
  _classCallCheck(this, ExampleClass);

  console.log('hello world');
};

exports.default = ExampleClass;

},{}],3:[function(require,module,exports){
'use strict';

var _ExampleClass = require('./layout/ExampleClass');

var _ExampleClass2 = _interopRequireDefault(_ExampleClass);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  //new ExampleClass();
  var modal = new _Modal2.default('myModal');
  modal.addToBody();
  modal.toggle();
});

},{"./components/Modal":1,"./layout/ExampleClass":2}]},{},[3]);
