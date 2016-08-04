/**
 * Created by wt on 16-8-1.
 */
class InitAction {
    constructor() {
        this.name = 'init';
        this.help = `
    ++++++++++++++++++++    Welcome     ++++++++++++++++++++
                    1 - ZIPToBarcode
                    2 - barcodeToZIP
                    q - quit`.trim();
    }

    doAction(cmd,output) {
        switch (cmd) {
            case '1':
                return 'ZIPToBarcode';
                break;
            case '2':
                return 'BarcodeToZIP';
                break;
            case 'q':
                process.exit();
                break;
            default:
                output("input error,input again");
                break;
        }
    }
}
module.exports = InitAction;
