function largestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestNumber([10, 5, 2, 2, 4, 10])); // Output: 5largestNumber([1, 2, 3, 4, 5]);
