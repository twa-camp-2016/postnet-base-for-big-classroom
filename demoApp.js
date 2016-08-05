/**
 * Created by qiyanzi on 16-8-2.
 */
'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/search',function (req,res) {
    console.log(req.body);
    res.send(req.body.name);
});

app.get('/searchfor',function (req,res) {
    console.log(req.query);
    res.send(req.query.name);
});

app.head('/searchHead',function (req,res) {
    console.log(req.query);
    res.send(req.query.text);
});

app.post('/api',function (req,res) {
    console.log(req.body);
    res.send(req.body.name);
});

app.put('/apii',function (req,res) {
    console.log(req.body);
    res.send(req.body.name);
});

app.listen(3000,function () {
    console.log('example app listening on port 3000!');
});