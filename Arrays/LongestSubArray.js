function longestSubArray(arr, k) {
  const preSumMap = new Map();
  let sum = 0,
    maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) maxLength = Math.max(maxLength, i + 1);

    let remaining = sum - k;
    if (preSumMap.has(remaining)) {
      let len = i - preSumMap.get(remaining);
      maxLength = Math.max(maxLength, len);
    }
    preSumMap.set(sum, i);
  }
  console.log(preSumMap)
  return maxLength;
}

console.log(longestSubArray([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));

// Only for postives in the array
// TC O(n),
// SC O(n)
