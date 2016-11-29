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

class Router {
    constructor(currentState) {
        this.currentName = {
            value: currentState
        };
        this.actions = Actions;
    }
    handle(cmd, output) {
        this.actions.find(v => v.name === this.currentName.value).doAction(cmd, output, this.currentName);
    }
}
module.exports = Router;


