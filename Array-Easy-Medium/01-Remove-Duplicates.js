function removeDuplicates(arr) {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  console.log(arr);
  return j + 1;
}

console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]));
