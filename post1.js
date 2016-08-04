'use strict'
let req = require('superagent');
//post :use query method

req
    .post('localhost:5000/user1')
    .send({pet:'cat'})
    .end(function (err, res) {
        if (res.statusCode === 200) {
            console.log("right!" + res.text);
        }
        else {
            console.log("error");
        }
    })
