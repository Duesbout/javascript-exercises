const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const sum = array => array.reduce((a, b) => a + b, 0);
	
const multiply = array => array.reduce((a, b) => a * b);

const power = (a,b) => Math.pow(a,b);

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial (n-1);
};
	
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
