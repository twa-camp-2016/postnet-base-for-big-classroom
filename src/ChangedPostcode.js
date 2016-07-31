/**
 * Created by zhangpei on 16/7/29.
 */
class ChangedPostcode {

  _isLegalPostcode(code) {
    let flag1 = code.length === 5 || code.length === 9 || code.length === 10;
    let codeArray = Array.from(code);
    let flag2 = codeArray.every(item=>(item >= '0' && item <= '9') || item === '-');
    let flag3 = codeArray.find(item=>item === "-") ? codeArray.indexOf("-") === 5 : true;
    return flag1 && flag2 && flag3;
  }

  _formatPostCode(code) {
    let array = code.split("-");
    return array.join("");
  }

  _calculateCheckCode(code) {
    let sum = 10 - code.split("").map(item=>Number(item)).reduce((a, b)=>a + b) % 10;
    return sum === 10 ? 0 : sum;
  }

  _loadTranslatedMethod() {
    return [
      {postCode: "1", barcode: ":::||"},
      {postCode: "2", barcode: "::|:|"},
      {postCode: "3", barcode: "::||:"},
      {postCode: "4", barcode: ":|::|"},
      {postCode: "5", barcode: ":|:|:"},
      {postCode: "6", barcode: ":||::"},
      {postCode: "7", barcode: "|:::|"},
      {postCode: "8", barcode: "|::|:"},
      {postCode: "9", barcode: "|:|::"},
      {postCode: "0", barcode: "||:::"}
    ];
  }

  _changeCode(checkCode, postCode, items) {
    let str = postCode + checkCode;
    return str.split("").map(item => {
      let exist = items.find(it => it.postCode === item);
      return exist.barcode;
    });
  }

  _addFrame(barcodes) {
    let str = "| ";
    str += barcodes.join(" ");
    return str + " |";
  }

  changePostCode(code) {
    let legalCode = this._isLegalPostcode(code);
    if (legalCode) {
      let postCode = this._formatPostCode(code);
      let checkCode = this._calculateCheckCode(postCode);
      let items = this._loadTranslatedMethod();
      let barcodes = this._changeCode(checkCode, postCode, items);
      return this._addFrame(barcodes);
    }
    return "您输入的邮编不合法,应是5,9或者10数字0-9字符,并且若有-,其应在第六位处,请重新输入";
  }
}

module.exports = ChangedPostcode;