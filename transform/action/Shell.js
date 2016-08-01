/**
 * Created by liuru on 16-8-1.
 */
class Shell {
    constructor(router, repl) {
        this.router = router;
        this.repl = repl;
    }
    start(cmd) {
        this.router.start();
        this.repl.start({
            prompt: '->', eval: (cmd, context, filename, done)=> {
                this.router.handle(cmd.trim());
                this.router.start();
                done();
            }
        })
    }
}

module.exports= Shell;