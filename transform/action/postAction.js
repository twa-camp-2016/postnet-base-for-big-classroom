/**
 * Created by liuru on 16-7-29.
 */
const createAction = require('./routerAction.js');
const name = `postTransformBarcode`;
const help = `
----2-inputPost
----3-return the init
----q-exist`.trim();
class post extends createAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case '2':
                return 'inputPost';
            case '3':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'init'
        }
    }
}
module.exports = new post(name, help);