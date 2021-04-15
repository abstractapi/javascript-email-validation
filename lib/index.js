"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractEmailValidation = void 0;

var core = _interopRequireWildcard(require("javascript-core"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AbstractEmailValidation = function AbstractEmailValidation() {
  _classCallCheck(this, AbstractEmailValidation);
};

exports.AbstractEmailValidation = AbstractEmailValidation;

_defineProperty(AbstractEmailValidation, "apiKey", void 0);

_defineProperty(AbstractEmailValidation, "configure", function (apiKey) {
  AbstractEmailValidation.apiKey = apiKey;
});

_defineProperty(AbstractEmailValidation, "verify", function (email) {
  if (!email) {
    throw new Error('Email is not provided.');
  }

  var self = AbstractEmailValidation;
  return core.makeApiCall('emailvalidation', self.apiKey, "email=".concat(email)).then(function (response) {
    // modify response so it returns Boolean instead of object
    var modifiedResponse = response;
    modifiedResponse['is_catchall_email'] = response.is_catchall_email.value;
    modifiedResponse['is_disposable_email'] = response.is_disposable_email.value;
    modifiedResponse['is_free_email'] = response.is_free_email.value;
    modifiedResponse['is_mx_found'] = response.is_mx_found.value;
    modifiedResponse['is_role_email'] = response.is_role_email.value;
    modifiedResponse['is_smtp_valid'] = response.is_smtp_valid.value;
    modifiedResponse['is_valid_format'] = response.is_valid_format.value;
    return modifiedResponse;
  })["catch"](function (error) {
    return error;
  });
});