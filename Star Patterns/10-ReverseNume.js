var reverse = function (x) {
  const INT_MIN = -Math.pow(2, 31); // -2147483648
  const INT_MAX = Math.pow(2, 31) - 1; // 2147483647
  if (x < INT_MIN || x > INT_MAX) {
    return 0;
  }

  let rev = 0;
  let neg = false;
  if (x < 0) {
    x = Math.abs(x);
    neg = true;
  }
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return neg ? -rev : rev;
};

console.log(reverse(123));

console.log(reverse(1534236469));
