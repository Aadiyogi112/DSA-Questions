// 2 pointer approach

function longestSubArray(arr, k) {
  let left,
    right = 0;
  let sum = arr[0];
  let maxLength = 0;
  let n = arr.length;

  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }
    if (sum === k) maxLength = Math.max(maxLength, right - left + 1);
    right++;
    if (right < n) sum += arr[right];
  }

  return maxLength;
}

console.log(longestSubArray([1, 2, 3, 1, 1, 1, 1, 3, 3], 6));
