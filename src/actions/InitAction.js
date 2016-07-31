/**
 * Created by afaren on 7/29/16.
 */
'use strict';

class InitAction {
  constructor() {
    this.name = 'init';
    this.help = 'initial: 1. barcode,  2. zipcode (entry \'q\' to quit)';
  }

  doAction(cmd) {
    switch (cmd) {
      case '1':
        return 'barcode';
      case '2':
        return 'zipcode';
      case 'q':
        console.log('---exit---');
        // replServer.close();
        process.exit(0);
        return;
      default:
        console.log('invalidate input');
        return 'init';
    }
  }
}

module.exports = InitAction;