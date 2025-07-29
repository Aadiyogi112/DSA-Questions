function countDigits(n) {
  if (n < 0) return countDigits(-n);
  if (n == 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigits(123));
console.log(countDigits(0));
console.log(countDigits(-15323));
