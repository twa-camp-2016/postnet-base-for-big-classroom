/**
 * Created by lucky on 16-8-1.
 */

class InitAction {
    constructor() {
        this.name = 'init';
        this.help = `~~~~~~~~~Welcome~~~~~~~
                     1 - barcode to postcode
                     2 - postcode to barcode
                     3 - exit
                     ~~~~~~~~~~~~~~~~~~~~~~~`.trim()
    }
    doAction(cmd){
        switch (cmd) {
            case '1':
                return 'barcode';
            case '2':
                return 'postcode';
            case '3':
                process.exit();
                break;
            default :
                console.log('Input error');
                return 'init';
        }
    }
}

module.exports=InitAction;