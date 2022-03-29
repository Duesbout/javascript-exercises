let array = ([1, 2, 3, 4], 3);

let removeFromArray = function(args) {
   args = array[0]
   console.log(removeFromArray);
    return args.filter(args => !args.includes(3));
}

console.log(removeFromArray);
  
// Do not edit below this line
module.exports = removeFromArray;
