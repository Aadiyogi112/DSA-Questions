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
    if (!preSumMap.has(sum)) preSumMap.set(sum, i);
  }
  console.log(preSumMap);
  return maxLength;
}

console.log(longestSubArray([2,0,0,0,3], 3));

// Only for postives in the array
// TC O(n),
// SC O(n)
