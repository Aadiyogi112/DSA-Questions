function secondLargest(arr) {
  let largest = arr[0];
  let sLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      sLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > sLargest) {
      sLargest = arr[i];
    }
  }
  return sLargest;
}

console.log(secondLargest([1,2,3,4,5,7,7,4,5]))