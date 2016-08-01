/**
 * Created by wt on 16-8-1.
 */
/*global require,module*/
const InitAction = require('./InitAction.js');
const BarcodeToZIPAction = require('./BarcodeToZIPAction');
const ZIPToBarcodeAction = require('./ZIPToBarcodeAction');

const Actions = [
    new InitAction(),
    new BarcodeToZIPAction(),
    new ZIPToBarcodeAction()
];

class router {
    constructor(actions) {
        this.currentName = 'init';
        this.actions = Actions;
    }

    handle(cmd) {
        this.currentName = this.actions.find(v => v.name === this.currentName).doAction(cmd);
    }

    start() {
        console.log(this.actions.find(v => v.name === this.currentName).help);
    }
}
module.exports = router;


