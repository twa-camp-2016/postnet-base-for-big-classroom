'use strict'
let req=require('superagent');
var headers = {
    'abc':'footbar'
};
req
    .post('localhost:5000/')
    .set(headers)
    .end(function (err, res) {
        console.log(res.statusCode);
        if (res.statusCode === 200) {
            console.log("right "+headers['abc']);
        }
        else {
            console.log("error ");
        }
    });