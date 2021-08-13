/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

function vowelsCounter(text) {
  let matchedItems = text.match(/[aeiou]/gi);
  if (matchedItems) {
    return matchedItems.length;
  } else {
    return 0;
  }
}

function vowelsCounter2(text) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}

function vowelsCounter1(text) {
  // let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  let charsArr = [...text];
  for (let char of charsArr) {
    if (
      char.toLowerCase() == 'a' ||
      char.toLowerCase() == 'e' ||
      char.toLowerCase() == 'i' ||
      char.toLowerCase() == 'o' ||
      char.toLowerCase() == 'u'
    ) {
      count++;
    }
  }
  return count;
}

module.exports = vowelsCounter;
