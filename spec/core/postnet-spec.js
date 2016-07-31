/**
 * Created by afaren on 7/28/16.
 */
import {
  getZipcodeCells,
  zipcodeToBarcode,
  calculateCheckDigit,
  buildBarcodeBody,
  barcodeToZipcode,
  isLegalBarcode,
  removeFrame,
  getBarcodeCells,
  convertBarcodeCellsToZipcodeCells,
  getCheckDigitInBarcode,
} from '../../src/core/postnet'

describe('getZipcodeCells', () => {
  it('should return a cell array of value', function () {
    let zipcode = '45056-1234';
    let actual = getZipcodeCells(zipcode);
    let expected = [4, 5, 0, 5, 6, 1, 2, 3, 4];
    expect(actual).toEqual(expected);

    zipcode = '44556';
    actual = getZipcodeCells(zipcode);
    expected = [4, 4, 5, 5, 6];
    expect(actual).toEqual(expected);

    zipcode = '44556333';
    actual = getZipcodeCells(zipcode);
    expected = [4, 4, 5, 5, 6, 3, 3, 3];
    expect(actual).toEqual(expected);

  })
});

describe('calculateCheckDigit', () => {
  it('should return check digit of zipcodeCells', () => {
    let zipcodeCells = [4, 5, 0, 5, 6];
    let expected = 0;
    let actual = calculateCheckDigit(zipcodeCells);
    expect(actual).toEqual(expected);

    zipcodeCells = [4, 5, 0, 5, 7];
    expected = 9;
    actual = calculateCheckDigit(zipcodeCells);
    expect(actual).toEqual(expected);

    zipcodeCells = [4, 5, 0, 5, 7, 9, 1, 1, 1];
    expected = 7;
    actual = calculateCheckDigit(zipcodeCells);
    expect(actual).toEqual(expected);
  })
});

describe('buildBarcodeBody', ()=> {
  it('should return value without frame', () => {
    let zipcodeCells = [4, 5, 0, 5, 6];
    let checkDigit = 0;
    let actual = buildBarcodeBody(zipcodeCells, checkDigit);
    let expected = ':|::| :|:|: ||::: :|:|: :||:: ||:::';
    expect(actual).toEqual(expected);

    zipcodeCells = [5, 4, 0, 5, 6];
    checkDigit = 0;
    actual = buildBarcodeBody(zipcodeCells, checkDigit);
    expected = ':|:|: :|::| ||::: :|:|: :||:: ||:::';
    expect(actual).toEqual(expected)
  })
});

describe('zipcodeToBarcode', () => {
  it('should return a error message when value has illegal length', () => {

    const expected = {errMsg: 'length is illegal', value: null};

    let zipcode = '1234';
    let actual = zipcodeToBarcode(zipcode);
    expect(actual).toEqual(expected);


    zipcode = '123456';
    actual = zipcodeToBarcode(zipcode);
    expect(actual).toEqual(expected);

    zipcode = '1234567890';
    actual = zipcodeToBarcode(zipcode);
    expect(actual).toEqual(expected);

  });
  it('should return a value without error message when zip is legal', () => {
    let zipcode = '45056';
    let expected = {errMsg: null, value: '| :|::| :|:|: ||::: :|:|: :||:: ||::: |'};
    let actual = zipcodeToBarcode(zipcode);
    expect(actual).toEqual(expected);

    zipcode = '54056';
    expected = {errMsg: null, value: '| :|:|: :|::| ||::: :|:|: :||:: ||::: |'};
    actual = zipcodeToBarcode(zipcode);
    expect(actual).toEqual(expected);

    zipcode = '45056-1234';
    actual = zipcodeToBarcode(zipcode);
    expected = {errMsg: null, value: '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |'};
    expect(actual).toEqual(expected);

  });

});

describe('removeFrame', () => {
  it('should return value body', () => {
    let barcode = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
    let actual = removeFrame(barcode);
    let expected = ':|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||:::';
    expect(actual).toEqual(expected)
  })
});

describe('getBarcodeCells', () => {
  it('should return a cell array of value', () => {
    let barcodeWithoutFrame = ':|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::|';
    let expected = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|'];
    let actual = getBarcodeCells(barcodeWithoutFrame);
    expect(actual).toEqual(expected);

  })
});

describe('convertBarcodeCellsToZipcodeCells', () => {
  it('should return equivalent form of value cells when given a barcodeCells', () => {
    let barcodeCells = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|', '||:::'];
    const expected = [4, 5, 0, 5, 6, 1, 2, 3, 4];
    let actual = convertBarcodeCellsToZipcodeCells(barcodeCells);
    expect(actual).toEqual(expected);
  })
});

describe('isLegalBarcode', () => {
  it('should judge a value illegal when it contains illegal character', () => {
    const barcode = ':|::*';
    const actual = isLegalBarcode(barcode);
    expect(actual).toBeFalsy();
  });
  it('should judge a value illegal when its length is illegal', () => {
    let barcode = ':|::';
    let actual = isLegalBarcode(barcode);
    expect(actual).toBeFalsy();

    barcode = ':|::| ||||| ::::: :';
    actual = isLegalBarcode(barcode);
    expect(actual).toBeFalsy();

  });
  it('should judge a value legal when its length is legal and it has frames and it does not contains illegal character', () => {
    let barcode = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
    let actual = isLegalBarcode(barcode);
    expect(actual).toBeTruthy();
  })
});

describe('getCheckDigitInBarcode', () => {
  it('should return check digit in value', () => {
    const barcodeCells = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|', '||:::'];//  [4, 5, 0, 5, 6, 1, 2, 3, 4];
    const actual = getCheckDigitInBarcode(barcodeCells);
    const expected = 0;
    expect(actual).toEqual(expected);
  })
});

describe('barcodeToZipcode', () => {
  it('should return equivalent value form of value when value is legal', () => {
    let barcode = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
    let actual = barcodeToZipcode(barcode);
    let expected = {errMsg: null, value: '450561234'};
    expect(actual).toEqual(expected)

  })
});
