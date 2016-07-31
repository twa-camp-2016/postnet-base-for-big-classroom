/**
 * Created by Sunshine on 2016/8/1.
 */
class Shell {
    constructor(router, repl) {
        this.router = router;
        this.repl = repl;
    }

    run() {
        this.router.start();
        //
        //this.repl.start({prompt: "> ", eval: (cmd, context, filename, done) => {
        //    this.router.switchRouter({cmd:cmd.trim()});
        //    this.router.start();
        //    done(null);
        //}});
        //}
        let that = this;
        this.repl.start({
            prompt: "> ", eval: function (cmd, context, filename, done) {
                that.router.switchRouter({cmd: cmd.trim()});
                that.router.start();
                done(null);
            }
        });
    }
}
module.exports = Shell;
//注意：箭头函数和function的访问差别