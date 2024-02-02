function union(a, b) {
  let i = 0,
    j = 0;
  const n1 = a.length;
  const n2 = b.length;
  const unionArray = [];

  while (i < n1 || j < n2) {
    //by this OR condition both the array will be exhausted here only no need for another loop
    if (a[i] < b[j]) {
      if (
        unionArray.length === 0 ||
        unionArray[unionArray.length - 1] !== a[i]
      ) {
        unionArray.push(a[i]);
      }
      i++;
    } else {
      if (
        unionArray.length === 0 ||
        unionArray[unionArray.length - 1] !== b[j]
      ) {
        unionArray.push(b[j]);
      }
      j++;
    }
  }
  return unionArray;
}

console.log(union([1, 1, 2, 3, 4, 5], [2, 3, 4, 4, 5, 6]));


//  TC:- O(n1+n2)
//  SC:- O(n1+n2)