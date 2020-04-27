// 3개의 숫자를 받아서 그 셋중에서 가장 큰 숫자를 리턴. 단, Math.max 쓰지 말 것.

// function getMax(n, m, l) {
// 	if (n>m && n>l) {
// 		return n
// 	}
// 	if (m>n && m>l) {
// 		return m
// 	}
// 	if (l>n && l>n) {
// 		return l
// 	}
// }

// Math.max(3, 2, 100, 9, 14, 214, 124, 4124, 23123)

function getMax(...numbers) {
  let [result] = numbers;

  for (let i = 1; i < numbers.length; i++) {
    if (result < numbers[i]) {
      result = numbers[i];
    }
  }

  return result;
}

console.log(getMax(1, -3, 0));
console.log(getMax(-2, 100, 0, 99));
console.log(getMax(1, -3, 99, -99, 300, 20));

// 객체를 설명해보세요.

const cat = {
  leg: 4,
  tail: 1,
};

cat.leg == 4;
