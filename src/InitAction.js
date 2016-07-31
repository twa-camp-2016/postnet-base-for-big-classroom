class InitAction{
    constructor(){
        this.name = 'init';
        this.help = '\nWelcome 欢迎进入转换界面\n* initMenu:\n  1 - 邮编转条码\n  2 - 条码转邮编\n  q - 退出';
    }
    doAction(cmd){
        switch (cmd) {
            case '1':
                return 'postcodeToBarcode';
            case '2':
                return 'barcodeToPostcode';
            case 'q':
                replServer.close();
                process.exit(0);
                return;
            default:
                console.log("无效的输入");
                return 'init'
        }
    }
}
module.exports = InitAction;
