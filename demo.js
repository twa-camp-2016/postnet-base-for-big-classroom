/**
 * Created by qiyanzi on 16-8-2.
 */
let request = require("superagent");

request
    .get('localhost:3000/search')
    .send({"name": 'Tom'})
    .send({"age": 15})
    .end(function (err, res) {
        console.log(res.text);
    });

request
    .get('localhost:3000/searchfor')
    .query('name=Danny')
    .query('age=10')
    .query('sex=male')
    .end(function (err, res) {
        console.log(res.text);
    });

request      //question
    .head('localhost:3000/searchHead')
    .query('name=An')
    .query('age=20')
    .query('sex=male')
    .end(function (err, res) {
        console.log(res.text);
    });

request
    .post('localhost:3000/api')
    .set('Accept', 'application/json')
    .send({"name": "An", "age": 30, "sex": "male"})
    .end(function (err, res) {
        console.log(res.text);
    });

request
    .put('localhost:3000/apii')
    .set('Accept', 'application/json')
    .send({"name": "Bn", "age": 40, "sex": "male"})
    .end(function (err, res) {
        console.log(res.text);
    });

request
    .post('/user')
    .type('form')
    .send({name: 'tj'})
    .send({pet: 'tobi'})
    .end(callback);

request
    .post('/upload')
    .field('user[name]', 'Tobi')
    .field('user[email]', 'tobi[@learnboost](/user/learnboost).com')
    .attach('image', 'path/to/tobi.png')
    .end(callback);