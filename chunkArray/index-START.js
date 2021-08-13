/* 
 Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length
 chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

function chunkArray(array, size) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);
    result.push(chunk);
  }
  return result;
}

function chunkArray2(array, size) {
  let result = [];
  let arrayCopy = [...array];
  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size));
  }
  return result;
}

function chunkArray1(array, size) {
  let result = [];
  for (let value of array) {
    let lastArray = result[result.length - 1];
    if (!lastArray || lastArray.length === size) {
      result.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return result;
}

module.exports = chunkArray;
