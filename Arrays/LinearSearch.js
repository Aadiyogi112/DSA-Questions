function linearSearch(arr, num) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === num) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 10));
