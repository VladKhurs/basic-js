const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let e = email.split('')
  let n = e.lastIndexOf('@') + 1
  e = e.splice(n)
  return e.join('')
}

module.exports = {
  getEmailDomain
};
