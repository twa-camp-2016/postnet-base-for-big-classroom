/**
 * Created by tong on 16-8-2.
 */
'use strict';

let request = require('sync-request');

function syncRequest(router, cmd){
  let res = request("POST", `http://127.0.0.1:3000/${router}`,{
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:`cmd=${cmd}`
  });

  console.log(res.getBody().toString());
}

module.exports = syncRequest;