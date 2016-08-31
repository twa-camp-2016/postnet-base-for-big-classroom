/**
 * Created by zhangyiru on 16-8-1.
 */
"use strict"
const agent = require("superagent");
let help = require('../help')
class ToPostCodeAction {
    constructor(cmd) {
        this.name = "barcode";
    }

    doAction(cmd, output, currentActionName) {
        switch (cmd) {
            case "1":
                output('Goodbye')
                process.exit();
                break;
            case "2":
                currentActionName.value = 'init';
                help(output);
                break;
            default:
                // outputAndExit('hello')
                agent
                    .get("http://localhost:3008/postcode")
                    .query({code: cmd})
                    .end(function (err, res) {
                        output(res.text);
                        help(input=>console.log(input));
                        currentActionName.value = 'init';
                    });
                break;
        }
    }
}

module.exports = ToPostCodeAction;
