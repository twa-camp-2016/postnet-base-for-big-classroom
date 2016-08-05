/**
 * Created by qiyanzi on 16-8-1.
 */
'use strict';
class Shell {
    constructor(router, repl) {
        this.router = router;
        this.repl = repl;
    }

    start() {
        this.router.start();
        this.repl.start({
            prompt: '>', eval: (cmd, context, filename, callback) => {
                this.router.handle(cmd.trim());
                this.router.start();
                callback();
            }
        });
    }
}

module.exports = Shell;