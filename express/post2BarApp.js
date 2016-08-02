/**
 * Created by hxc on 16-8-1.
 */
var express = require('express');
var app = express();
var routes = require('./routers/route')(app);
app.listen(3000);
