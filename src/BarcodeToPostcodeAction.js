
class BarcodeToPostcodeAction{
    constructor(){
        this.name = 'barcodeToPostcode';
        this.help = '\n * 条形码转换邮编的状态\n  a - 输入条形码并转换.\n  q - 返回主界面.';
    }
    doAction(cmd){
        switch (cmd) {
            case 'a':
                return 'dealBarcodeToPostcode';
            default:
                console.log("无效的输入");
                return 'init'
        }
    }
}
module.exports = BarcodeToPostcodeAction;

