function searchElement(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }
  return -1;
}

console.log(searchElement([1, 2, 3, 4, 5], 3));
