// // I hate it
// const catLeg = 4
// const catMouth = 1
// const catEar = 2
// const catTail = 1

// I love it
const cat = {
	leg: 4,
	mouth: 1,
	ear: 2,
	tail: 1,
}

console.log('cat\'s leg:',cat.leg)
console.log('cat\'s mouth:',cat.mouth)
console.log('cat\'s ear:',cat.ear)
console.log('cat\'s tail:',cat.tail)

cat.eye = 2
cat.leg = 5

console.log(cat.sdoufhgoasugos) // undefined

const a = { i: 1, b: 3, };
const b = { i: 1, b: 3, };
const c = a;
c.z = 3

if (a == c) {
	console.log('Same')
} else {
	console.log('Not same!')
}

if (a == b) {
	console.log("Same!")
} else {
	console.log("Not same!")
}

// 구조 분해 할당

// I hate it
// const i = a.i

// I love it
const { i } = a;

const { h, j, ...rest} = {
	h: 9,
	j: 'hello',
	p: 0,
	l: 'z',
}

console.log(h) // 9
console.log(j) // hello
console.log(rest) // {p:0, l:'z'}

const leg = 6
const newCat = {
	...cat,
	leg,
}
