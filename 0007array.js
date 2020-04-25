// I hate it!
// const person1 = 'HSH'
// const person2 = 'BGH'
// const person3 = 'CWB'

// I love it!
const personList = ["HSH", "BGH", "CWB"];

console.log(personList[0]);
console.log(personList[1]);
console.log(personList[2]);

console.log(personList.length);
console.log(personList[personList.length - 1]);

personList[0] = "HGD"; // 0번째 요소를 수정
personList.push("HHM"); // 마지막 요소에 추가
personList.unshift("ASD"); // 맨 앞 요소에 추가

const lastPerson = personList.pop(); // 마지막 요소를 제거
const firstPerson = personList.shift(); //0번째 요소를 제거

console.log(personList);

if (personList.includes("HSH")) {
  console.log("HSH exist");
}

for (let i = 0; i < personList.length; i++) {
  const person = personList[i];
  console.log(person);
}

for (let count = 0; count < personList.length; count++) {
  const person = personList[count].toLowerCase();
  console.log(person);
}

personList.sort();

const listA = [1, 2, 3, 4];
const listB = [7, 8, 9, 10];
const listC = [...listA, 1, ...listB];

const sortedPersonList = [...personList].sort();

// 문제: 배열의 원소의 합을 구한다.
const list = [1, 2, 3, 4, 100, 22, 12];
let sum = 0;

for (let a = 0; a < list.length; a++) {
  sum += list[a];
}

console.log(sum);

// 문제: 주어진 배열을 거꾸로 출력
const list = [2, 3, 1, 6];

for (let i = list.length - 1; i >= 0; i--) {
  console.log(list[i]);
}

// 구조 분해 할당

// I hate it!
// const first = list[0]
// const second = list[1]

// I love it
const [first, a, b, second] = list;

// I hate it
// const a = list[0]
// const b = list[1]
// const rest = [ list[2], list[3], ]

// I love it
const [a, b, ...rest] = list;
