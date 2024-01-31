function isArraySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i] > arr[i - 1])) return false;
  }

  return true;
}

console.log(isArraySorted([1,2,3,4,5,6,7,8,9]))
console.log(isArraySorted([1,10,3,4,5,6,7,8,9]))
