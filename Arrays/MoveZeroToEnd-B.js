// Brute Force Approach

function moveZerosToEnd(arr) {
  const n = arr.length;
  let temp = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) temp.push(arr[i]);
  }
  let nonZero = temp.length;

  for (let i = 0; i < nonZero; i++) {
    arr[i] = temp[i];
  }

  for (let i = nonZero; i < n; i++) {
    arr[i] = 0;
  }

  return arr;
}

console.log(moveZerosToEnd([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
