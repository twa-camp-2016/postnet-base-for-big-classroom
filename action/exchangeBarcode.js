const postnet = require("../transformer/translate");

class ExchangeBarcode {
    constructor() {
        this.name = "exchangeBarcode";
        this.help = "\n1-返回上一层\n2-返回首页\nq-退出\n" +
            "请输入barcode：\n(barcode需有界符'|'，\n" +
            "并用空格和条码隔开，\n条码每五个用空格隔开)";
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'barcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                let input = postnet.barcodeToPostcode(cmd);
                console.log(input);
                return 'exchangeBarcode';
        }
    }
}
module.exports = ExchangeBarcode;