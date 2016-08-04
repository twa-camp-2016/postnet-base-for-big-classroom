'use strict'
let req=require('superagent');

req
    .post('localhost:6000/user2')
    .query({pet:'cat'})
    .end(function (err,res) {
        if(res.statusCode===200){
            console.log("right!"+res.text);
        }else{
            console.log("wrong!");
        }
    });
