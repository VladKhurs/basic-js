const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt() {
    if(arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let ans = ''
    let c = 0
    let arg0 = arguments[0].toUpperCase()
    let arg1 = arguments[1].toUpperCase()
    console.log(arg0, arg1)
    for(let i = 0; i < arg0.length; i++) {
      let q = -3
      let w = -3
      if(a.indexOf(arg0[i]) !== -1 ) {
          q = a.indexOf(arg0[i])
          w = a.indexOf(arg1[c])
          console.log('qw  ', q,w)
          if (q + w > a.length-1) {
              console.log('!!!  ', q,w, q + w - a.length, a[q + w - a.length-1], c)
            ans += a[q + w - a.length]
          }
          else {
              console.log('+++  ', q,w, q + w, a[q + w], c)
            ans += a[q + w]
          }
          if(c === arg1.length - 1) {
            c = 0
          }
          else {
            c++
          }
      }
      
      else {
          ans += arg0[i]
      }
    }

    return ans
  }
  decrypt() {
    if(arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let ans = ''
    let c = 0
    let arg0 = arguments[0].toUpperCase()
    let arg1 = arguments[1].toUpperCase()
    console.log(arg0, arg1)
    for(let i = 0; i < arg0.length; i++) {
      let q = -3
      let w = -3
      if(a.indexOf(arg0[i]) !== -1 ) {
          q = a.indexOf(arg0[i])
          w = a.indexOf(arg1[c])
          console.log('qw  ', q,w)
          if (q - w < 0) {
              console.log('!!!  ', q,w, q + w - a.length, a[q + w - a.length-1], c)
            ans += a[q - w + a.length]
          }
          else {
              console.log('+++  ', q,w, q + w, a[q + w], c)
            ans += a[q - w]
          }
          if(c === arg1.length - 1) {
            c = 0
          }
          else {
            c++
          }
      }
      
      else {
          ans += arg0[i]
      }
    }

    return ans
  }
}

module.exports = {
  VigenereCipheringMachine
};
