const sumAll = (a,b) => {
    if (a < 0 || b < 0) return 'ERROR'
    if (typeof a === 'string' || typeof b === 'string') return 'ERROR'
    if (isNaN(a) || isNaN(b)) return 'ERROR'
    return (Math.abs(a-b) + 1)*(a + b)/2;
};
console.log(sumAll);

// Do not edit below this line
module.exports = sumAll;
