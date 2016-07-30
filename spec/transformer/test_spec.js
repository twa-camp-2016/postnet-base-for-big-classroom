/**
 * Created by hxc on 16-7-28.
 */
const obj=require('../../transformer/test');
describe('sum',function(){
    it('should return 3',function(){
        expect(obj.sum(1)).toEqual(3);
    });
});

describe('sub',function(){
    it('should return 4',function(){
        expect(obj.sub(1)).toEqual(4);
    })
});