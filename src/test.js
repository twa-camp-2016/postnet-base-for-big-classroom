/**
 * Created by wt on 16-8-3.
 */
let agent = require('superagent');
let repl=require('repl');
class Router {
    constructor() {
        this.status = 'init';
    }
    doAction(cmd, outputAndExit) {
        switch (this.status) {
            case 'init':
                this.status = 'menu';
                outputAndExit('Welcome to use blahblah...');
                break;
            case 'menu':
                if (cmd.trim() === 'q') {
                    outputAndExit('Goodbye.');
                    process.exit();
                } else {
                    agent.get('www.baidu.com')
                        .end(function (error, response) {
                            outputAndExit(response.header);
                        });
                }
                break;
            default:
                this.status = 'menu';
                outputAndExit('What are you doing?');
        }
    }
}

let router = new Router();

function onUserInput(cmd, context, filename, callback) {
    router.doAction(cmd, function (text) {
        callback(null, text);
    });
}

repl.start({
    prompt: '->',
    eval: onUserInput
});