function rightRotate(arr, d) {
  const n = arr.length;
  d = d % n;
  const rotatedPart = arr.splice(n-d, d);
  arr.unshift(...rotatedPart);

  return arr;
}

console.log(rightRotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
