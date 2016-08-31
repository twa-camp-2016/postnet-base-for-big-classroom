'use strict';
const agent = require("superagent");
let help = require("./help");
class ZipcodeAction {
    constructor() {
        this.name = 'zipcode';
    }

    doAction(cmd,outWord,currentState) {
        if (cmd === 'q') {
            outWord("已退出");
            process.exit();

        }
        else if (cmd === 'r') {
            outWord("返回初始界面");
            currentState.value = "init";
            help(outWord);
        }
        else {
            agent.get("http://localhost:3005/zipcode")
                .query({code:cmd})
                .end(function(error,response){
                    outWord(response.text);
                    console.log("请选择功能:1.邮编转编码 2.编码转邮编 3.退出");
                    currentState.value = "init";
                })
        }
    }
}
module.exports = ZipcodeAction;