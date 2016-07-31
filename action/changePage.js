/**
 * Created by fcc on 16-7-31.
 */
'use strict';
class changePage {
    constructor() {
        this.name = 'changePage';
        this.help = '1-邮编转条码\n2-条码转邮编\n3-返回上一层\nq-退出\nPlease input:';
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'postcodeTurnBarcode';
            case '2':
                return 'barcodeTurnPostcode';
            case '3':
                return 'init';
            case 'q':
                replServer.close();
                process.exit(0);
                return;
            default:
                console.log("Please enter the correct number：");
                return 'changePage'
        }
    }
}

module.exports = changePage;
