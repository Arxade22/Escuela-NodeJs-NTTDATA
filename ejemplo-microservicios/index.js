"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var appId = process.env.APPID;
app.get('/', function (req, res) { return res.send("".concat(appId)); });
