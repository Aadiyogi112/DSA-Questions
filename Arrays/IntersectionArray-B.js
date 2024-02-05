function intersectionArray(arr1, arr2) {
  let ans = [];
  let visited = [];
  const n1 = arr1.length;
  const n2 = arr2.length;

  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      if (arr1[i] == arr2[j] && visited[j] == 0) {
        ans.unshift(arr1[i]);
        visited[j] = 1;
        break;
      }
      if (arr2[j] > arr1[i]) break;
    }
  }
  return ans;
}

console.log(intersectionArray([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]));
