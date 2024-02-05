function missingNumberInArray(arr, n) {
  // The outer loop will give us the possible number that can be which are 1-5
  // Inner loop we are iterating for the array values from index 0 to n-1 because one element is missing
  // The values should match the indeces in the outer loop if they do its fine break and increment i++
  // anytime we complete the inner loop and the flag does not change to 0 it means that particular i value is missing from the array

  for (let i = 1; i < n; i++) {
    flag = 0;
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] == i) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) return i;
  }
}

console.log(missingNumberInArray([1, 2, 4, 5], 5));



// TC- O(N^2)
// SC- O(1)