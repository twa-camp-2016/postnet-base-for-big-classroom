
class PostcodeToBarcodeAction{
    constructor(){
        this.name = 'postcodeToBarcode';
        this.help = '\n * 邮编转条码的状态\n  1 - 输入并转换.\n  q - 返回主界面.';
    }
    doAction(cmd){
        switch (cmd) {
            case '1':
                return 'dealPostcodeToBarcode';
            default:
                console.log("无效的输入");
                return 'init'
        }
    }
}
module.exports = PostcodeToBarcodeAction;
