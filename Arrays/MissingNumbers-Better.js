function missingNumberInArray(arr, n) {
  const hashMap = {};
  // setting up true value for each of the number present in the the arrya
  for (const num of arr) {
    hashMap[num] = true;
  }

  const missingNumber = [];

  for (let i = 1; i < n; i++) {
    if (!hashMap[i]) {
      missingNumber.push(i);
    }
  }
  return missingNumber;
}

console.log(missingNumberInArray([1, 2, 4, 5], 5));
