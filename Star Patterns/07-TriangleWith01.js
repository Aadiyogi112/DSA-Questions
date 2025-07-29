// n=5
// 1
// 01
// 101
// 0101
// 10101

function starPatternSeven(n) {
  let toggle = "0";
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 1; j <= i + 1; j++) {
      if (toggle == "1") {
        row = row + "0";
        toggle = "0";
      } else {
        row = row + "1";
        toggle = "1";
      }
    }
    console.log(row);
  }
}

starPatternSeven(5);
