const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    /*let a = []
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        a = a.concat(calculateDepth(arr[i]))
      }
      else {
        a.push(arr[i])
      }
    }
    return a*/

    let depth = 1; 
 
    for (let i = 0; i < arr.length; i++) { 
      if (Array.isArray(arr[i])) { 
        const nestedDepth = calculateDepth(arr[i]) + 1; 
        depth = Math.max(depth, nestedDepth); 
      } 
    } 
   
    return depth; 
  }
}

module.exports = {
  DepthCalculator
};
