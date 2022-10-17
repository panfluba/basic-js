const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let strArr = [],
    value = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      strArr.push(str[i]);
      value = 1;
    }
    else {
      value++;
      strArr.pop();
      strArr.push(`${value}${str[i]}`);
    }
  }
  return strArr.join('').replaceAll(',','');
}


module.exports = {
  encodeLine
};
