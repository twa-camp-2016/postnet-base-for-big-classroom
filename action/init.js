'use strict'

class Init{
    constructor(){
        this.name='init';
        this.help="Welcome:\n1-barcode\n2-zipCode\nq-退出";
    }
    doAction(cmd){
        switch (cmd) {
            case '1':
                return 'barcode';
            case '2':
                return 'zipCode';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'init';
        }
    }
}
module.exports=Init;
