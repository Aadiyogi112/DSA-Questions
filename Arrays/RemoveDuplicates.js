function countUniqueInSortedArray(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] != arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }

  return i + 1;
}

console.log(countUniqueInSortedArray([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]));

function removeDuplicates(arr) {
  let unique = new Set(arr);
  return  Array.from(unique);
}

console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]));
