function moveZerosToEndOptimal(arr) {
  const n = arr.length;
  let j = -1;

  //   find the first zero element and from there we will move on to iterate
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }

  //   iterate the array right from first zero element till the end and swap the first non zero you will find

  for (let i = j + 1; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}

console.log(moveZerosToEndOptimal([1, 0, 2, 3, 2, 0, 0, 4, 5, 1]));
