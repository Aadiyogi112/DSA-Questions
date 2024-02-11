function missingNumber(arr, n) {
  const sum = (n * (n + 1)) / 2;
  let sumArr = 0;
  for (let i = 0; i < n-1; i++) {
    sumArr += arr[i];
  }

  return sum - sumArr;
}


console.log(missingNumber([1,2,4,5],5))

// TC- O(n)
// SC- O(1)