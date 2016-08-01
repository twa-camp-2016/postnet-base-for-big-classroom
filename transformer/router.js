'use strict'
class Router{
    constructor(actions){
        this.currentName='init';
        this.actions=actions;
    }
    handle(cmd) {
           let action = this.actions.find(v => v.name === this.currentName);
                let nextState = action.doAction(cmd);
               let newAction = this.actions.find(v => v.name === nextState);
                this.currentName = newAction.name;
          }
   start() {
          console.log(this.actions.find(v => v.name === this.currentName).help);
       }
}

module.exports=Router;