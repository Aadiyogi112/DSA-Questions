// n=5
// 1
// 12
// 123
// 1234
// 12345

function starPatternThree(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

starPatternThree(5);
