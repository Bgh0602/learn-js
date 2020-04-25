const list = [ 2, 3, 2, 1, 6, 4 ]
// let sum=0

// for (let i=0; i<list.length; i++) {
// 	sum+=list[i]
// }

// const mean = sum / list.length
// console.log(mean)

//구조 분해 할당

// const first = list[0]
// const second = list[1]
// const third = list[2]

// const [ first, second, third ] = list

// 배열의 0번째 요소 n을 가져와 0~n 사이의 임의의 정수를 출력하시오 
const [ n ] = list

// process.argv = [
// 	'/usr/bin/node',
// 	'/workspace/learningJs/p.js',
// 	'1923132',
// 	'sfidfuber',
// 	'123'
// ]

// node p.js HSH tmdgus0084@naver.com 111111

// 첫번째 인자는 name, 사람의 이름이다.
// 두번째 인자는 email, 이메일.
// 세번쨰 인자는 password
// HSH 의 이메일은 tmdgus0084@naver.com 비번 111111
// BGH 의 이메일은 bjhbkh2@naver.com 비번 123456
// 사람, 이메일, 비번이 모두 알맞으면 로그인 성공!
// 아니면 다시 시도하세요!
// const [ name, email, password ] = process.argv.slice(2)

// if (name=='HSH' && email=='tmdgus0084@naver.com' && password==111111) {
// 	console.log('황승현 로그인 성공!')
// } else if (name=='BGH' && email=='bjhbkh2@naver.com' && password==123456) {
// 	console.log('배건희 로그인 성공!')
// } else {
// 	console.log('다시 시도하세요')
// }

// const userName = 'HSH'
// const userEmail = 'tmdgus0084@naver.com'
// const userPassword = '111111'

const user = {
	name: 'HSH',
	email: 'tmdgus0084@naver.com',
	password: '111111',
}

// const [ inputName, inputEmail, inputPassword ]= process.argv.slice(2)
// const { name, email, password } = user;

// if (inputName == name && inputEmail == email && inputPassword == password) { 
// 	console.log('로그인 성공')
// } else {
// 	console.log('로그인 실패')
// }

// const name = user.name
// const email = user.email
// const { name, email } = user

const userList = [
	{
		name: 'HSH',
		email: 'tmdgus0084@naver.com',
		password: '111111',
	},
	{
		name: 'BGH',
		email: 'bjhbkh2@naver.com',
		password: '123456',
	},
]

// userList[0].name

const [inputName, inputEmail, inputPassword]=process.argv.slice(2)
let isLoginSucceess = false;

for (let i=0; i<userList.length; i++) 
{ 
	const {name, email, password} = userList[i]
	if (inputName==name && inputEmail==email && inputPassword==password) {
		console.log(name, '로그인 성공')
		isLoginSucceess = true
		break
	}
}

// !true == false
// !false == true

// false, '', 0, NaN, null, undefined => false로 취급
// 이외의 모든 값은 true

if(!isLoginSucceess) {
	console.log('로그인 실패')
}





