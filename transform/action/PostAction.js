/**
 * Created by liuru on 16-7-29.
 */
const CreateAction = require('./RouterAction.js');
const name = `PostTransformBarcode`;
const help = `
----2-inputPost
----3-return the init
----q-exist`.trim();
class Post extends CreateAction {
    constructor(name, help) {
        super(name, help);
    }

    doAction(cmd) {
        switch (cmd) {
            case '2':
                return 'InputPost';
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
module.exports = new Post(name, help);