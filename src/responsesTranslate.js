'use strict'
class Responses {
    constructor(info) {
        this._info = info;
    }

    get info() {
        return _info;
    }

    set info(info) {
        this._info = info;
    }
}

module.exports = Responses;