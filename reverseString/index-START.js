/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseString(text) {
  return [...text].reduce((acc, curr) => curr + acc, '');
}

function reverseString5(text) {
  if (text === '') {
    return '';
  }
  return reverseString(text.substr(1)) + text[0];
}

function reverseString4(text) {
  let result = '';
  for (let char of text) {
    result += char;
  }
  return result;
}

function reverseString3(text) {
  let result = '';
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }
  return result;
}

function reverseString2(text) {
  return [...text].reverse().join('');
}

function reverseString1(text) {
  return text.split('').reverse().join('');
}

module.exports = reverseString;
