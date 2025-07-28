function secondLargest(arr) {
  if (arr.length < 2) return null;
  //   edge case..if the array is empty or has only 1 element
  let largest = arr[0];
  let second = arr[0];

  for (const element of arr) {
    if (element > largest) {
      second = largest;
      largest = element;
    } else if (element > second && element < largest) {
      second = element;
    }
  }
  return second;
}

console.log(secondLargest([1, 2, 3, 4, 5, 7, 7, 4, 5]));
console.log(secondLargest([]));
console.log(secondLargest([1]));
console.log(secondLargest([10, 20, 20]));
