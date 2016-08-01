'use strict'
const createAction=require('./routeAction');
//const method=require('../../transformer/postcode2Barcode');
function barToZip(cmd) {
    switch(cmd) {
        case '1':return 'input_barcode';
        case '2':return('init');
        case 'q':
            process.exit(0);
        // case 'a':
        //     return 'number'
        default:
            console.log("无效的输入");
            return 'barcode->z'
    }
}

module.exports=function(){
    return createAction('barcode->z',
        "您已进入条码转邮编状态！" +
        "\n1.输入条码" +
        "\n2.返回上一层" +
        "\n3.退出\n",
        barToZip);
}