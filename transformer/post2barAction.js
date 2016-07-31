/**
 * Created by hxc on 16-7-29.
 */

const Action = require('./creatAction');
const post = require('./postTobarcode');

function Post2Bar(name, help) {
    //继承父类的属性，借用父类的构造函数
    Action.call(this, name, help);
}
//继承父类的方法
Post2Bar.prototype = new Action();
//给Post2Bar定义doAction方法
Post2Bar.prototype.doAction = function (cmd) {
    switch (cmd) {
        case 'q':
            return 'init';
        default:
            console.log(post.postToBarcode(cmd));
            return 'post2Barcode';
    }
};

let post2barcodeDoAction = new Post2Bar('post2Barcode', '请输入邮编,退出请按q');

module.exports = post2barcodeDoAction;