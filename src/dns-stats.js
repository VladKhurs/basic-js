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
  let unick = [];
  let all = [];
  for (let i = 0; i < domains.length; i += 1) {
    let dI = domains[i].split('.').reverse();
    console.log(dI)
    let s = '';
    for (let j = 0; j < dI.length; j += 1) {
      dI[j] = '.' + dI[j];
      s += dI[j];
      if (unick.indexOf(s) === -1) {
        unick.push(s);
      }
      all.push(s);
    }
  }
  let n = Array(unick.length).fill(0);
  for (let i = 0; i < all.length; i += 1) {
    n[unick.indexOf(all[i])] += 1;
  }
  
  let ans = {};
  for (let i = 0; i < unick.length; i += 1) {
      ans[unick[i]] = n[i];
  }

  return ans;
}

module.exports = {
  getDNSStats
};
