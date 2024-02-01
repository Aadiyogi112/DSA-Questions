function leftRotate1(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length-1] = temp;

  return arr;
}

console.log(leftRotate1([1,2,3,4,5,6,7]))