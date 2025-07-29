// n=5
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function starPatternFour(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row = row + j + " ";
    }
    console.log(row);
  }
}

starPatternFour(5);
