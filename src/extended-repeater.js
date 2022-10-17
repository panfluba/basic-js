const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  const keys = new Set(Object.keys(options)),
        times = keys.has('repeatTimes') ? options.repeatTimes : 1,
        separator = keys.has('separator') ? options.separator : '+',
        addition = keys.has('addition') ? options.addition : '',
        additionTimes = keys.has('additionRepeatTimes') ? options.additionRepeatTimes : 1,
        additionSeparator = keys.has('additionSeparator') ? options.additionSeparator : '|';

  for (i = 0; i < times; i++) {

    result += str;

    for (let j = 0; j < additionTimes; j++) {
      result += j < additionTimes - 1 ? addition + additionSeparator : addition;
    }
    result += i < times - 1 ? separator : '';
  }
  return result;
}


module.exports = {
  repeater
};
