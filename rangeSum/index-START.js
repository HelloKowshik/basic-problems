function rangeSum(arr) {
  let arrList = [];
  for (i = arr[0]; i <= arr[1]; i++) {
    arrList.push(i);
  }
  return arrList.reduce((acc, num) => acc + num, 0);
}

function rangeSum2(arr) {
  return ((arr[1] - arr[0] + 1) * (arr[0] + arr[1])) / 2;
}

function rangeSum1(arr) {
  let [start, end] = arr;
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

module.exports = rangeSum;
