'use strict';
let express = require('express');
let app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/', function (req, res) {
    res.send(req.get('abc'));
});

app.listen(5000,function () {
    console.log('Example app listening 5000');
});
