/**
 * Created by wt on 16-8-1.
 */
class InitAction {
    constructor(){
        this.name='init';
    }
    doAction(cmd,output,currentName) {
        switch (cmd) {
            case '1':
                currentName.value='BarcodeToZIP';
                output('Please input barcode');
                break;
            case '2':
                currentName.value='ZIPToBarcode';
                output('Please input zip code');
                break;
            case 'q':
                process.exit();
                output('Goodbye');
                break;
            default:
                output("input error,input again");
                break;
        }
    }
}
module.exports = InitAction;
