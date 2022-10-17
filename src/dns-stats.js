const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  const domainList = [];

  for (const a of domains) {
    a.split('.').reverse().reduce((b, c) => { 
      b += "." + c; 
      domainList.push(b); 
      return b;
    }, "");
  }
  return domainList.reduce((b, c) => {
    b[c] = ++b[c] || 1;
    return b;
  }, {});
}

module.exports = {
  getDNSStats
};
