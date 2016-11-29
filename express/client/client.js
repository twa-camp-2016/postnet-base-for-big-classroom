const request=require('superagent');

request
    .post('http://localhost:3000/postTransformer')
    .type('form')
    .send({ post:12345})
    .set('Accept', 'application/json')
    .end(function(err,res){
        if(err) throw err;
        if (res.ok) {
            console.log('yay got ' + JSON.stringify(res.body));
        } else {
            console.log('Oh no! error ' + res.text);
        }
    });