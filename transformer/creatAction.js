/**
 * Created by hxc on 16-7-29.
 */

class Action {
    constructor(name, help, doAction) {

        this.doAction = doAction;
        this.name = name;
        this.help = help;
    }
}

module.exports = Action;
