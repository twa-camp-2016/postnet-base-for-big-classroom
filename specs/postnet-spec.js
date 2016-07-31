/**
 * Created by Sunshine on 2016/7/29.
 */
'use strict';
const app = require('../src/shell.js');
describe('init test',function(){
    iit('test',function(){
        let input = 'init';
        let result = app.actions.find(item =>item.name === input).help;
        expect(result).toEqual('\nWelcome 欢迎进入转换界面\n* initMenu:\n  1 - 邮编转条码\n  2 - 条码转邮编\n  q - 退出');
    });
});