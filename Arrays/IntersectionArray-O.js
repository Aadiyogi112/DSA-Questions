function intersectionOfSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

console.log(
  intersectionOfSortedArrays([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7])
);
