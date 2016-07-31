/**
 * Created by afaren on 7/31/16.
 */
'use strict';
// const Router = require('./../Router');
// const repl = require('repl');

class Shell {

  // why warning
  constructor(router, repl) {
    this.router = router;
    this.repl = repl;
  }

  // runnable
  run() {
    this.router.start();
    this.repl.start({
      prompt: '->', eval: (cmd, context, filename, callback) => {
        this.router.handle(cmd.trim());
        this.router.start();
        callback();
      }
    });
  }


  // cannot run in this form
  // handleCmd(cmd, context, filename, callback) {
  //   this.router.handle(cmd);
  //   this.router.start();
  //   callback();
  // }
  //
  // run() {
  //   this.router.start();
  //   this.repl.start({prompt: '->', eval: handleCmd});
  // }


}


module.exports = Shell;




