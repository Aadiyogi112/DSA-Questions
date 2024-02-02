function union(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const unionSet = new Set([...set1, ...set2]);

  return Array.from(unionSet);
}

console.log(union([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]));
