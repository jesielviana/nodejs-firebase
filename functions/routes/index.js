"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  return res.send('App Online!');
});
var users = [{
  nome: "João"
}, {
  nome: "José"
}, {
  nome: "Pedro"
}];
router.use('/users', function (req, res) {
  return res.send(JSON.stringify(users));
});
var _default = router;
exports["default"] = _default;