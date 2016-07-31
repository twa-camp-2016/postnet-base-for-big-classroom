const postnet = require("../transformer/translate");

class ExchangePostcode {
    constructor() {
        this.name = "exchangePostcode";
        this.help = "\n1-返回上一层\n2-返回首页\nq-退出\n" +
            "请输入postcode：\n(形如：12345或123456789或12345-6789)";
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'postcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                let input = postnet.postcodeToBarcode(cmd);
                console.log(input);
                return 'exchangePostcode';
        }
    }
}
module.exports = ExchangePostcode;