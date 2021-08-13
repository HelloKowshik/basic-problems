/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/

function whereIBelong(arr, num) {
  arr.push(num);
  arr.sort((x, y) => x - y);
  return arr.indexOf(num);
}

function whereIBelong1(arr, num) {
  arr.sort((x, y) => x - y);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

module.exports = whereIBelong;
