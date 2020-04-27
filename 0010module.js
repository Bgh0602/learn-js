// node package manager
// npm
//
// npm i 패키지_이름

const getMean = require("mean");
const { name } = require("./module-test/user");

console.log(name);
console.log(getMean([1, 2, 3, 4]));

const shortid = require("shortid");
console.log(shortid.generate());
