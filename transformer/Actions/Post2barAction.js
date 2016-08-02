
/**
 * Created by hxc on 16-7-29.
 */

const post = require('../core/PostcodeTransformer');
const request=require('superagent');

class post2barAction{
    constructor(name,help){
        this.name=name;
        this.help=help;
    }
    doAction(cmd){

        switch (cmd) {
            case 'q':
                return 'init';
            default:
                request
                    .post('http://localhost:3000/postTransformer')
                    .type('form')
                    .send({ cmd:cmd})
                    .set('Accept', 'application/json')
                    .end(function(err,res){
                        if(err) throw err;
                        if (res.ok) {
                            console.log('转换结果 ' + JSON.stringify(res.body));
                        } else {
                            console.log('Oh no! error ' + res.text);
                        }
                    });
                return 'post2Barcode';
        }
    }
}

module.exports=new post2barAction('post2Barcode', '请输入邮编,退出请按q');