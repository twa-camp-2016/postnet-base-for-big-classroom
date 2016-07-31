class Barcode {
    constructor() {
        this.name = "barcode";
        this.help = "\n条码转邮编：\n1-输入barcode\n2-返回上一层\nq-退出";
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'exchangeBarcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'barcode'
        }
    }
}
module.exports = Barcode;