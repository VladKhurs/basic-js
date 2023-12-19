const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let sapmTest = sampleActivity;
  if (typeof sampleActivity != 'string') {
    return false;
  }

  if (sapmTest === '' || sapmTest === ' ' || sapmTest === ' \n\t\r') {
    return false;
  }

  if (!Number.isInteger(Math.floor(sapmTest)) || Number(sapmTest) > 15 || Number(sapmTest) <= 0) {
    return false;
  }

  const c = 0.693 / HALF_LIFE_PERIOD;
  let ans = Math.log(MODERN_ACTIVITY / sampleActivity) / (c);
  if (ans > Math.floor(ans)) {
    ans = Math.floor(ans) + 1;
  }
  return ans
}

module.exports = {
  dateSample
};
