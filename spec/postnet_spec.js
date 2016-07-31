/*
'use strict';

function num2code(num) {
  num = num === 0 ? 11 : num;
  let times = 0;
  let result = "";
  [7, 4, 2, 1, 0].forEach(w => {
    if(num >= w && times <2) {
      num -= w;
      times ++;
      result += '|';
    } else {
      result += ':';
    }
  });
  return result;
}
describe("num2code", ()=> {
  it("should return :::|| when number is 1", ()=> {
    expect(num2code(1)).toEqual(':::||');
  });

  it("should return ::|:| when number is 2", ()=> {
    expect(num2code(2)).toEqual('::|:|');
  });

  it("should return ::||: when number is 3", ()=> {
    expect(num2code(3)).toEqual('::||:');
  });

  it("should return |:|:: when number is 3", ()=> {
    expect(num2code(9)).toEqual('|:|::');
  });

  it("should return ||::: when number is 3", ()=> {
    expect(num2code(0)).toEqual('||:::');
  });
});






*/
