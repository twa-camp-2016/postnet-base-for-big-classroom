let req = require('superagent');

//  /search?query=Manny&range=1..5&order=desc
req
    .get('localhost:3000/query')
    .query({range: '1'})
    .end(function (err, res) {
        if (res.statusCode === 200) {
            console.log("right!" + res.text);
        }
        else {
            console.log("error");
        }
    });
