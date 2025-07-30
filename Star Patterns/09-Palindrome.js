function palindrome(n) {
  let rev = 0;
  let num = n;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (rev === n) return true;
  else return false;
}

console.log(palindrome(121));
console.log(palindrome(1212));
console.log(palindrome(1221));
