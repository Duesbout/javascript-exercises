const palindromes = function checkPalindrom (str) {
    str = str.toLowerCase().replace(/\W/g, ''); //Changes the string to lowercase and removes any non-letters
    return str == str.split('').reverse().join('');
  }
  


// Do not edit below this line
module.exports = palindromes;
