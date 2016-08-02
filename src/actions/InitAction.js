/**
 * Created by wanggenwang on 16-8-1.
 */

class InitAction{
    constructor(){
        this.name='init';
        this.help=`
Welcome
1 - postcode
2 - barcode
3 - quit`.trim();
    }
    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'postcode';
                break;
            case '2':
                return 'barcode';
                break;
            case '3':
                process.exit();
            default:
                console.log('Input error\n');
                return 'init';
        }
    }
}
module.exports = InitAction;





