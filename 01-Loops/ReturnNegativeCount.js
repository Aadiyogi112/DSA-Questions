function returnNegativeCount(arr) {
  let neg = 0;
  for (const element of arr) {
    if (element < 0) {
      neg++;
    }
  }
  return neg;
}

const res = returnNegativeCount([
  1, 2, 3, -3, 5, -5, -6, -7, -7, -8, 12, 42, 23,
]);
console.log(res);
