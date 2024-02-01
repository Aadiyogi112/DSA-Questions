function leftRotateD(arr, d) {
  let n = arr.length;
  d = d % n;
  let temp = [];
  // setting temp
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }

  // shifting
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }

  // put back the temp

  for (let i = n-d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }

  return arr;
}


console.log(leftRotateD([1,2,3,4,5,6,7,8,9],3))