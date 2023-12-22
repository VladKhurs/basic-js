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
  let ans = ''
  let c = options.repeatTimes
  let d = options.additionRepeatTimes
  let a = options.addition === false ? 'false' : options.addition
  let aS = options.additionSeparator === false ? 'false' : options.additionSeparator
  let s = options.separator === false ? 'false' : options.separator

  if(options.addition === null) a = 'null'
  if(options.additionSeparator === null) aS = 'null'
  if(options.separator === null) s = 'null'
  if (c === undefined) c = 1
  if (d === undefined) d = 1
  for(let i = 0; i < c; i += 1) {
    ans += str
    for(let j = 0; j < d; j += 1) {
      ans += a || ''
      if(j !== d - 1) {
        ans += aS || '|'
      }
    }
    if(i !== c - 1) {
      ans += s || '+'
    }
  }
  return ans
}

module.exports = {
  repeater
};
