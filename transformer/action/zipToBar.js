const createAction=require('./routeAction.js');
function zToBAction(cmd) {
    switch(cmd) {
        case '1':return 'input_zipcode';
        case '2':return('init');
        case 'q':process.exit(0);
        default:
            console.log("无效的输入");
            return 'zipcode->b'
    }
}

module.exports=function () {
    return (createAction('zipcode->b', '您已进入邮编转条码状态！\n' +
        '1.输入邮编\n' +
        '2.返回上一层\n' +
        '3.退出\n',zToBAction));
}