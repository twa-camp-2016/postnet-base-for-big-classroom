const ba = require('../../transform/action/BarcodeAction.js');
const init = require('../../transform/action/InitAction.js');
const inputBar = require('../../transform/action/InputBarcode.js');
const inputPo = require('../../transform/action/InputPost.js');
const post = require('../../transform/action/PostAction.js');
const router = require('../../transform/action/RouterAction.js');

describe("const[0].doAction", function () {
    it("should return the name of function of number", function () {
        let input = '1';
        let result = ba.doAction(input);
        let expected = 'InputBarcode';
        expect(result).toEqual(expected);
    });
    it("should return the name of function of letter", function () {
        let input = '2';
        let result = ba.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
    it("should return the init", function () {
        let input = '3';
        let result = ba.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
});

describe("initAction", function () {
    it("should return the init ", function () {
        let input = '1';
        let result = init.doAction(input);
        let expected = 'BarcodeTransformPost';
        expect(result).toEqual(expected);
    });
    it("should return the init ", function () {
        let input = '2';
        //console.log(init)
        let result = init.doAction(input);
        let expected = 'PostTransformBarcode';
        expect(result).toEqual(expected);
    });
    it("should return the init ", function () {
        let input = '4';
        let result = init.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
});

describe("inputbarcode", function () {
    it("should return the input", function () {
        let input = 'b';
        let result = inputBar.doAction(input);
        let expected = 'BarcodeTransformPost';
        expect(result).toEqual(expected);
    });
    it("should return the input", function () {
        let input = '3';
        let result = inputBar.doAction(input);
        let expected = 'BarcodeTransformPost';
        expect(result).toEqual(expected);
    });
    it('should reutrn the input check BarcodeTransformPost', function () {
        let cmd = '| :::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        let expected = `12345
cd is:5`;
        spyOn(console, 'log');
        let result = inputBar.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });
    it('should reutrn the input check BarcodeTransformPost', function () {
        let cmd = '|ssss';
        let expected = `the input is have not correct input`;
        spyOn(console, 'log');
        let result = inputBar.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });
    it('should reutrn the input check BarcodeTransformPost', function () {
        let cmd = '| |::|| ::|:| ::||: :|::| :|:|: :|:|: |';
        let expected = `the each number > 9 or the exampleString is not correct`;
        spyOn(console, 'log');
        let result = inputBar.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected)
    });
});

describe("inputPost", function () {
    it("should return the post to Barcode", function () {
        let input = 'p';
        let result = inputPo.doAction(input);
        let expected = 'PostTransformBarcode';
        expect(result).toEqual(expected);
    });
    it("should return the post to Barcode", function () {
        let input = 'i';
        let result = inputPo.doAction(input);
        let expected = 'InputPost';
        expect(result).toEqual(expected);
    });
    it('should return the input check postTransformBarcode', function () {
        let cmd = '12345';
        let expected = '|:::||::|:|::||::|::|:|:|::|:|:|';
        spyOn(console, 'log');
        let result = inputPo.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected);
    });
    it('should return the input check postTransformBarcode', function () {
        let cmd = '123453';
        let expected = `the input is error`;
        spyOn(console, 'log');
        let result = inputPo.doAction(cmd);

        expect(console.log).toHaveBeenCalledWith(expected);
    });

});
describe("postAction", function () {
    it("should return the postAction", function () {
        let input = '2';
        let result = post.doAction(input);
        let expected = 'InputPost';
        expect(result).toEqual(expected);
    });
    it("should return the postAction", function () {
        let input = '3';
        let result = post.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
    it("should return the postAction", function () {
        let input = '4';
        let result = post.doAction(input);
        let expected = 'init';
        expect(result).toEqual(expected);
    });
});