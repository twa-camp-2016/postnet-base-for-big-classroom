'use strict'
let express = require('express')
let app = express();

app.post('/users', function(req, res){
    res.json({name:'Mary'});
});
app.post('/',function (req,res) {
    res.send(req.get('abc'));
})
var server = app.listen(2050, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
