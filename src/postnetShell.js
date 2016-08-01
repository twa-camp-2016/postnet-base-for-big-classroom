/**
 * Created by zhangpei on 16/7/28.
 */
import repl from "repl";
import InitAction from './actions/InitAction';
import PostcodeAction from './actions/PostcodeAction';
import BarcodeAction from './actions/BarcodeAction';
import RouterSwitcher from './RouterSwitcher';

let routers = [
  new InitAction(),
  new PostcodeAction(),
  new BarcodeAction()
];

let routerSwitcher = new RouterSwitcher(routers);

function start(repl){
  console.log(routerSwitcher.start());
  repl.start({prompt: '> ', eval: (cmd, context, filename, output) => {
    output(routerSwitcher.switchRouter(cmd.trim()).help);
  }});
}

start(repl);
