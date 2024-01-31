function secondSmallest(arr) {
    let smallest = arr[0];
    let sSmallest = 1000;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        sSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] > smallest && arr[i] < sSmallest) {
        sSmallest = arr[i];
      }
    }
    return smallest;
  }
  
  console.log(secondSmallest([3,3,4,5,7,7,4,5]))