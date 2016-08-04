'use strict'
let req = require('superagent');

req
    .get('localhost:2050/user/tj')
    .end(function (err, res) {
        if (res.statusCode === 200) {
            console.log('right!' + res.text);
        } else {
            console.log("wrong!");
        }
    });
