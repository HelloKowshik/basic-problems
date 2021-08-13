/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ');
}

function capSentence2(text) {
  let words = text.toLowerCase().split(' ');
  let capsArr = [];
  words.forEach((word) => capsArr.push(word[0].toUpperCase() + word.slice(1)));
  return capsArr.join(' ');
}

function capSentence1(text) {
  let finalText = [];
  let textArr = text.split(' ');
  for (let word of textArr) {
    finalText.push(word[0].toUpperCase() + word.substr(1).toLowerCase());
  }
  return finalText.join(' ');
}

module.exports = capSentence;
