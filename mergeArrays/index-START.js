/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
  let jointArray = [];
  arrays.forEach((array) => jointArray.push(...array));
  let uniqueArray = jointArray.reduce((newArray, item) => {
    if (newArray.includes(item)) {
      return newArray;
    } else {
      return [...newArray, item];
    }
  }, []);
  return uniqueArray;
}

function mergeArrays3(...arrays) {
  let jointArray = [];
  arrays.forEach((array) => jointArray.push(...array));
  let uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  return uniqueArray;
}

function mergeArrays2(...arrays) {
  let x = [];
  arrays.forEach((array) => x.push(...array));
  return [...new Set(x)];
}

function mergeArrays1(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });

  return [...new Set([...jointArray])];
}

module.exports = mergeArrays;
