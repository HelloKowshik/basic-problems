/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(stringA, stringB) {
  let count = 0;
  if (stringA.length == stringB.length) {
    for (let i = 0; i < stringA.length; i++) {
      if (stringA[i] !== stringB[i]) {
        count++;
      }
    }
    return count;
  } else {
    throw new Error('Strings Lengths are not EQUAL!');
  }
}

module.exports = hammingDistance;
