'use strict'
function createAction(name,help,doAction) {
    return{
        name:name,
        help:help,
        doAction:doAction
    }
}
module.exports=createAction;