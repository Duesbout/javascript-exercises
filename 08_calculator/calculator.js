const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const sum = [].reduce((a,b) => a + b, 0);
	

const multiply = ([a,b]) => a * b;

const power = (a,b) = a ** b;

const factorial = (x: number): number => (x === 0) ? 1 : (x * this.factorial(x-1));
	
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
