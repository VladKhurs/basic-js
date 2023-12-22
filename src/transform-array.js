const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!")
  let a = []
  let o = {}
  let isPushed = false
  for(let i = 0; i < arr.length; i++) {

  }
  for (i = 0; i < arr.length; i++) {
    isPushed = false
    if((arr[i] === '--double-next') || (arr[i] === '--double-prev') || (arr[i] === '--discard-next') || (arr[i] === '--discard-prev')) {
      if((arr[i] === '--double-next' && i !== arr.length-1) || (arr[i] === '--double-prev' && i !== 0) || (arr[i] === '--discard-next' && i !== arr.length-1) || (arr[i] === '--discard-prev' && i !== 0)) {
        o[i] = arr[i]
      }
      else {
        continue
      }

    }
    else if(isPushed === false) {
      a.push(arr[i])
      isPushed = true
    }
  }

  if(o !== {}) {
    for(let i in o) {
        if(o[i] === '--double-next') {
          a.splice(Number(i)+1, 0, Number(i)+1)
          console.log('q')
        }
        
        if(o[i] === '--double-prev') {
          a.splice(Number(i), 0, Number(i))
          console.log('q')
        }
      
        if(o[i] === '--discard-prev') {
          a.splice(Number(i)-1, 1)
          console.log('q')
        }
        if(o[i] === '--discard-next') {
          a.splice(Number(i), 1)
          console.log('q')
        }
    }
  }
  return a
}

module.exports = {
  transform
};
