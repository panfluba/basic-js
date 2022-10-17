const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  
  n = `${n}`;
  const res = [];

  for (const a in n) {
    const arr = [...n];
    arr.splice(a, 1);
    res.push(+arr.join(''));
  }
  return Math.max(...res)
}

module.exports = {
  deleteDigit
};
