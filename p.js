const exchangeRate = 1233.53
const salary = 1000
const koreaSalary = exchangeRate * salary
const keyboardPrice = 449000

// 만약 살 수 있으면 YES 못사면 NOPE
if (koreaSalary >= keyboardPrice) {
	console.log('Yes')
} else {
	console.log('No')
}

let n=10
while (n<=21) {
	console.log(n)
	n++
}

let n=100
while (n>=90) {
	console.log(n)
	n--
}

for (let n=3; n<=20; n+=2) {a
	console.log(n)
}

const a = 1/100
switch(a * 100) {
	case 1:
		console.log('first')
		break
	case 2:
		console.log('second')
		break
	case 3:
		console.log('third')
		break
	default:
		console.log('I don\'t know')	
}

const list = [22, 33, 44, 0, 100, -23]
let sum = 0 

for (let i=0; i<list.length; i++) {
	sum = sum + list[i]
}

console.log(sum)