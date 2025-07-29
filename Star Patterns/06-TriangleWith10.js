// n=5
// 1
// 10
// 101
// 1010
// 10101

function starPatternSix(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 1; j <= i + 1; j++) {
      row = row + (j % 2);
    }
    console.log(row);
  }
}

starPatternSix(5);
