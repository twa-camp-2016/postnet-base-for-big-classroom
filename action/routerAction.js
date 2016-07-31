/**
 * Created by fcc on 16-7-29.
 */
'use strict';

function createAction(name, help, doAction) {
    return {
        name:name,
        help: help,
        doAction: doAction
    }
}

module.exports=createAction;