class Postcode {
    constructor() {
        this.name = "postcode";
        this.help = "\n邮编转条码：\n1-输入postcode\n2-返回上一层\nq-退出"
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'exchangePostcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'postcode';
        }
    }
}
module.exports = Postcode;