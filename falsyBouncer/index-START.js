/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

function falsyBouncer(array) {
  let filteredArr = [];
  for (let item of array) {
    if (item) {
      filteredArr.push(item);
    }
  }
  return filteredArr;
}

function falsyBouncer1(array) {
  let filteredArr = array.filter((item) => item);
  return filteredArr;
}

module.exports = falsyBouncer;
