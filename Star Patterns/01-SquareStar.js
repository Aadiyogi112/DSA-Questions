// n=4
// * * * *
// * * * *
// * * * *
// * * * *

// function startPatternOne(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       process.stdout.write("* ");
//     }
//     console.log("");
//   }
// }

function startPatternOne(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}

startPatternOne(4);
