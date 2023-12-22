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
  const s = str.split('')
  let u = []
  let n = Array(s.length).fill(0)
  let ans = ''
  for (let i = 0; i < s.length; i += 1) {
    if ((s[i] === s[i - 1] && u[u.length - 1] !== s[i]) || s[i] !== s[i - 1]) {
      u.push(s[i])
    }
    n[u.lastIndexOf(s[i])] += 1
  }

  for (let i = 0; i < u.length; i += 1) {
    let nn = n[i] === 1 ? '' : String(n[i])
    ans += nn + u[i]
  }
  return ans;
}

module.exports = {
  encodeLine
};
