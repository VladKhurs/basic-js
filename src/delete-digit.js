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
  let arr = [];
  let s = String(n);
  for (let i = 0; i < s.length; i += 1) {
    arr.push(s.split(''));
    arr[i].splice(i, 1);
    arr[i] = Number(arr[i].join(''));
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
