/**
 * Created by qiyanzi on 16-8-2.
 */
'use strict';
const repl = require('repl');
let request = require("superagent");
let Router = require("./transformer/Router");

class Init {
    constructor() {
        this.name = "init";
        this.help = "\n-初始化界面-\n1-邮编转条码\n2-条码转邮编\nq-退出";
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'postcode';
            case '2':
                return 'barcode';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'init';
        }
    }
}

class Barcode {
    constructor() {
        this.name = "barcode";
        this.help = "\n条码转邮编：\n1-输入barcode\n2-返回上一层\nq-退出";
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'exchangeBarcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'barcode'
        }
    }
}

class Postcode {
    constructor() {
        this.name = "postcode";
        this.help = "\n邮编转条码：\n1-输入postcode\n2-返回上一层\nq-退出"
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'exchangePostcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                console.log("无效的输入");
                return 'postcode';
        }
    }
}

class ExchangeBarcode {
    constructor() {
        this.name = "exchangeBarcode";
        this.help = "\n1-返回上一层\n2-返回首页\nq-退出\n" +
            "请输入barcode：\n(barcode需有界符'|'，\n" +
            "并用空格和条码隔开，\n条码每五个用空格隔开)";
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'barcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                syncHandle(cmd.trim(), this.name);
                return 'exchangeBarcode';
        }
    }
}

class ExchangePostcode {
    constructor() {
        this.name = "exchangePostcode";
        this.help = "\n1-返回上一层\n2-返回首页\nq-退出\n" +
            "请输入postcode：\n(形如：12345或123456789或12345-6789)";
    }

    doAction(cmd) {
        switch (cmd) {
            case '1':
                return 'postcode';
            case '2':
                return 'init';
            case 'q':
                process.exit(0);
            default:
                syncHandle(cmd.trim(), this.name);
                return 'exchangePostcode';
        }
    }
}

const actions = [
    new Init(),
    new Barcode(),
    new Postcode(),
    new ExchangeBarcode(),
    new ExchangePostcode()
];

let router = new Router(actions);
router.start();
let replServer = repl.start({prompt: "> ", eval: handleCmd});

function handleCmd(cmd, context, filename, callback) {
    router.handle(cmd.trim());
    router.start();
    callback();

}

function syncHandle(cmd, urlName) {
    var request = require('sync-request');
    var res = request('POST', 'http://127.0.0.1:3000/'+urlName, {
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: 'code='+cmd
    });
    console.log(res.getBody().toString());
}


