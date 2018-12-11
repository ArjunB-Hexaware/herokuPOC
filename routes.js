const express = require('express');
let router = express();
var chatfw = require("./chatframework.js")

router.post('/teamsDFPOC',chatfw.connector.listen());