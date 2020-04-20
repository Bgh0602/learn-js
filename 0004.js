//if

// const a = 9

// if (a == 99) {
//     // a is true
//     console.log(6);
// } else if (a == 9) {
//     // a is false
//     console.log(4);
// } else {
//     console.log(7);

// }

//score 0~100 있는데 50점미만이면 F, 50점이상 60점 미만이면 C, 60점이상 70미만이면 B, 70점이상 A 을 출력
const score = 101;
if (score < 0 || score > 100) {
  console.log("input 0~100");
} else if (score < 50 && 0 <= score) {
  console.log("F");
} else if (score < 60) {
  console.log("C");
} else if (score < 70) {
  console.log("B");
} else {
  console.log("A");
}
