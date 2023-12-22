const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let ans = names.map((e) => e)
  let n = Array(names.length).fill(0)
  for(let i = 0; i < ans.length; i++) {
    for(let j = i + 1; j < ans.length; j++) {
      if(ans[i] === ans[j]) {
        n[i] += 1
        ans[j] = ans[j] + '(' + n[i] + ')'
      }
    }
  }
  for(let i = 0; i < ans.length; i++) {
    if(ans.indexOf(ans[i]) !== ans.lastIndexOf(ans[i])) {
      ans[ans.lastIndexOf(ans[i])] += '(1)'
    }
  }
  return ans
}

module.exports = {
  renameFiles
};
