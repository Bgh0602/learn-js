// function drawLine() {
// 	console.log('--------------------------')
// }

// drawLine()
// console.log('반갑습니다!!')
// drawLine()

// n 팩토리얼 구하기
// function factorial(n) {
// 	// let n = 함수를 호출할때 맨 처음에 쓴 거.
// 	let result = 1

// 	for (let i=0; n-i > 0; i++) {
// 		result=result*(n-i)
// 	}

// 	return result;
// }

// const m = factorial(3)
// console.log(m)

// function sum(a, b) {
// 	return a + b
// }

// const result = sum(3, 4)
// console.log(result)

// function multiply(n, m) {
// 	return n * m
// }

// console.log(multiply(4,2))

// 첫번째 매개변수 n=0은 월요일 n=1은 화요일 .. 을 결과로 갖는 함수 만들어보기
// function getDay(n) {
// 	if (n==0) {
// 		return 'Monday'
// 	} else if (n==1) {
// 		return 'Tuesday'
// 	}
// }

// console.log(getDay(1))

// const Math  = {
// 	min: function min(data) {
// 		저중에서 가장 작은 거 뽑아줌
// 	},

// 	max: function max(data) {
// 		저중에서 가장 큰 거 뽑아줌
// 	}
// }

// 두 수의 최대공약수를 찾아주는 함수
// function getGreatCommonFactor(n,m) {
// 	let greatCommonFactor;
// 	const min = Math.min(n, m)

// 	for(let i=1; i <= min; i++) {
// 		if (n%i==0 && m%i==0) {
// 			greatCommonFactor=i
// 		}
// 	}

// 	return greatCommonFactor
// }

// console.log(getGreatCommonFactor(17,34))
// console.log(getGreatCommonFactor(100,150))
// console.log(getGreatCommonFactor(12,4))
// console.log(getGreatCommonFactor(7,100))
// console.log(getGreatCommonFactor(17,9))

// 함수 표현식
// const getAddValue = function (n, m) {
// 	return n + m
// }

// 함수 선언식
// 호이스팅
// function getAddValue(n, m) {
// 	return n + m
// }

// console.log(getAddValue(1,2))

// const myObject = {}

// myObject.sayHello = function (){
// 	console.log('hello')
// }

// myObject.sayHello()

// 재귀함수

// 재귀함수 예제: 팩토리얼
// n! = n x (n-1)! // n = 1 or 0 => result = 1

// function factorial(n) {
// 	if (n == 1 || n == 0) {
// 		return 1;
// 	}

// 	return n * factorial(n - 1)
// }

// const result = factorial(4);

// 재귀함수 예제: 피보나치 수열
// a_n = a_(n-1) + a_(n-2) // 단, (n = 0 => 0), (n = 1 => 1),
// 0 1 1 2 3 5 8 13 21 34
// 0 1 2 3 4 5 6  7  8  9

// function fibonachi(n) {
// 	if (n == 0) return 0
// 	if (n == 1) return 1
// 	return fibonachi(n - 1) + fibonachi(n - 2);
// }

// console.log(fibonachi(9))

// function getMax(...numbers) {
// 	let [ result ] = numbers

// 	for (let i=1; i < numbers.length; i++) {
// 		if (result < numbers[i]) {
// 			result = numbers[i];
// 		}
// 	}

// 	return result
// }

function checkUser({ name, email, password }) {
  // let name = user.name;
  // let email = user.email;
  // let password = user.password;
  return true;
}

checkUser({
  name: "HSH",
  email: "tmdgus0084@naver.com",
  password: "111111",
});
