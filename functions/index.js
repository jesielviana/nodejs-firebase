"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _express = _interopRequireDefault(require("express"));

var _consign = _interopRequireDefault(require("consign"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use('/', _routes["default"]);

var _default = functions.https.onRequest(app);

exports["default"] = _default;