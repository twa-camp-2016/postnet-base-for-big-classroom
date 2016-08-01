/**
 * Created by yuan on 7/31/16.
 */
/*global require,process,module*/
class InitAction {
    constructor() {
        this.name = 'init';
        this.help = `
- - - - -  Welcome - - - -
---> 1. postcodes-barcodes         
---> 2. barcodes-postcodes
---> 3. quit
- - - - - - - - - - - - -`.trim();
    }
    doAction(cmd) {
        switch (cmd) {
            case'1': return 'barcodes';
            case'2': return 'postcodes';
            case'3': process.exit();break;
            default: console.log('Your print wrong!');
                     return 'init';

        }
    }
}
module.exports = InitAction;