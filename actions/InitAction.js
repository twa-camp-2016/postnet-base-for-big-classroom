/**
 * Created by lucky on 16-8-1.
 */

class InitAction {
    constructor() {
        this.name = 'init';
    }

    doAction(cmd,outputAndQuit,currentName){
        switch (cmd) {
            case '1':
                currentName.value='barcode';
                outputAndQuit('please input barcode(press q to quit):');
                break;
            case '2':
                currentName.value='postcode';
                outputAndQuit('please input postcode(press q to quit):');
                break;
            case '3':
                outputAndQuit('GoodBye');
                process.exit(0);
                break;
            default :
                currentName.value='init';
                outputAndQuit('------Input error');
        }
    }
}

module.exports = InitAction;