const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Boolean(members) === false) {
    return false;
  }
  let ans = '';
  for (let i = 0; i < members.length; i += 1) {
    if (Boolean(members[i]) === false || typeof members[i] === 'number' || typeof members[i] === 'boolean' || typeof members[i] === 'object') {
      continue;
    }

    let m = members[i].trim();
    if (typeof members[i][0] === 'string') {
      ans += m[0].toUpperCase();
    }
  }
  return ans.split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
