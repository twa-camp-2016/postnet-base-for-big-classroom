class Init {
    constructor() {
        this.name = "init";
        this.help = "\n-初始化界面-\n1-邮编转条码\n2-条码转邮编\nq-退出";
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'postcode';
            case '2':
                return 'barcode';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'init';
        }
    }
}
module.exports = Init;