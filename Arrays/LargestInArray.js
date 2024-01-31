function largestElement(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  return largest;
}

console.log(largestElement([2,3,,7,3,6,3,6,100,99,99,100]))