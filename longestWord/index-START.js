/* CHALLENGE
Given a string of text, write an algorithm that returns the longest word in sentence. 
E.g reverseString('algorithms are cool') // should return 'algorithms'
*/

function longestWord(text) {
  let sortedArr = text
    .split(' ')
    .sort((wordA, wordB) => wordB.length - wordA.length);
  return sortedArr[0];
}

function longestWord3(text) {
  let result = text.split(' ').reduce((maxLengthWord, currentWord) => {
    if (maxLengthWord.length > currentWord.length) {
      return maxLengthWord;
    } else {
      return currentWord;
    }
  }, '');
  return result;
}

function longestWord2(text) {
  let textArray = text.split(' ');
  let maxLength = 0;
  let result = '';
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i].length > maxLength) {
      maxLength = textArray[i].length;
      result = textArray[i];
    }
  }
  return result;
}

function longestWord1(text) {
  let textArray = text.split(' ');
  let textLengthArray = [];
  textArray.forEach((word) => textLengthArray.push(word.length));
  return textArray[textLengthArray.indexOf(Math.max(...textLengthArray))];
}

module.exports = longestWord;
