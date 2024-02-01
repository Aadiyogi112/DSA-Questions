function rotateDOptimal(arr, d) {
  const n = arr.length;
  d = d % n;
  const rotatedPart = arr.splice(0, d);
  arr.push(...rotatedPart);

  return arr;
}

console.log(rotateDOptimal([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
