
/**
 * Created by hxc on 16-7-29.
 */

const post = require('../core/PostcodeTransformer');

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
                console.log(post.postToBarcode(cmd));
                return 'post2Barcode';
        }
    }
}

module.exports=new post2barAction('post2Barcode', '请输入邮编,退出请按q');