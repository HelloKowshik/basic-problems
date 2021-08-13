/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/

function palindromeChecker(text) {
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] !== text[text.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function palindromeChecker3(text) {
  let charArray = text.toLowerCase().split('');
  let result = charArray.every((char, index) => {
    return char == charArray[charArray.length - index - 1];
  });
  return result;
}

function palindromeChecker2(text) {
  let count = 0;
  for (let i = 0; i < Math.floor(text.length - 1); i++) {
    if (text[i].toLowerCase() == text[text.length - i - 1].toLowerCase()) {
      count++;
    } else {
      count--;
    }
  }
  return count == Math.floor(text.length - 1 / 2);
}

function palindromeChecker1(text) {
  let reversedText = text.split('').reverse().join('');
  return reversedText === text;
}

module.exports = palindromeChecker;
