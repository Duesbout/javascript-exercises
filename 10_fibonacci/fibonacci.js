const fibonacci = function fibonacci(num) {
    let a = 0, b = 1, temp;
    if (num === 0) return 0;
    if (num < 0) return "OOPS";
 
  while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
  }
    
    return b;
}

// Do not edit below this line
module.exports = fibonacci;