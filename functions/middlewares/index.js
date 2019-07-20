"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use('/', _routes["default"]);
var _default = app;
exports["default"] = _default;