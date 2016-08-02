/**
 * Created by tong on 16-8-2.
 */
const request = require('superagent');

function superAgent(router, cmd) {
  console.log(router);
  request
          .post(`localhost:3000/${router}`)
          .type('form')
          .send({cmd: cmd})
          .end(function (err, res) {
            if (res.ok) {
              console.log(`The result is: ${JSON.stringify(res.body)}`);
            } else {
              console.log(`error: ${res}`);
            }
          });
}

module.exports = superAgent;

