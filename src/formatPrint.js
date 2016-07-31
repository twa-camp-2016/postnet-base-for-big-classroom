/**
 * Created by afaren on 7/29/16.
 */

module.exports = function printConvertResult(result) {
  if (result.errMsg !== null)
    console.log('error message: ' + result.errMsg);
  else
    console.log('<--  ' + result.value);
  return;
};
// 使用这种方法导出方法时，在action中导入会遇到问题
// module.exports = {printConvertResult: printConvertResult};