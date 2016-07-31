'use strict';
/*glabol expect require it expect toEqual*/
const converter = require('../../core/converter');

describe('post code to bar code', ()=> {
  it('should output six bar code ', ()=> {
    let result = converter.zipCodeToBarCode('12345');
    expect(result).toEqual('| :::|| ::|:| ::||: :|::| :|:|: :|:|: |');
  });

  it('should out put ten barcode',function(){
    let result = converter.zipCodeToBarCode('123456789');
    expect(result).toEqual('| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |');
  });

  it('should out put barcode',function(){
    let result = converter.zipCodeToBarCode("12345-6789");
    expect(result).toEqual("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |");
  });

  it('should output undefined',function(){
    let result = converter.zipCodeToBarCode("123");
    expect(result).toEqual(undefined);
  });

  it('should output undefined',function(){
    let result = converter.zipCodeToBarCode("123456");
    expect(result).toEqual(undefined);
  });

  it('should output undefind',function(){
    let result = converter.barCodeToZipCode("12+456");
    expect(result).toEqual(undefined);
  });
});

describe('bar code to post code',function(){
  it('',function(){
    let result = converter.barCodeToZipCode("| ::|| ||:: |");
    expect(result).toEqual(undefined);
  });

  it('',function(){
    let result = converter.barCodeToZipCode('++||');
    expect(result).toEqual(undefined);
  });

  it('',function(){
    let result = converter.barCodeToZipCode('|:::|:::||||:::');
    expect(result).toEqual(undefined);
  });

  it('',function(){
    let result = converter.barCodeToZipCode("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: |::|: |");
    expect(result).toEqual(undefined);
  })

  it('',function(){
    let result = converter.barCodeToZipCode("| :::|| ::|:| ::||: :|::| :|:|: :||:: |:::| |::|: |:|:: :|:|: |");
    expect(result).toEqual("12345-6789");
  });

  it('',function(){
    let result = converter.barCodeToZipCode("| :::|| ::|:| ::||: :|::| :|:|: :|:|: |");
    expect(result).toEqual("12345");
  });
});