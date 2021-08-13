/* CHALLENGE
Given an integer, return an integer that is the reverse 
ordering of that which was received. E.g
    reverseInteger(-123) // should return -321
*/

function reverseInteger(num) {
  const reversedNum = num.toString().split('').reverse().join('');
  return Math.sign(num) * parseInt(reversedNum);
}

function reverseInteger1(num) {
  function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '');
  }
  let reversedNumber = parseInt(reverseString(num.toString()));
  return reversedNumber * Math.sign(num);
}

module.exports = reverseInteger;
