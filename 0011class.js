// const userName = 'HSH'
// const userEmail = 'tmdgus00084@naver.com'
// const userPassword = '111111'

const userHSH = new User('HSH', 'tmdgus00084@naver.com', '111111')
const userBGH = new User('BGH', 'bjhbkh2@naver.com', '123456')

// function getUser(name, email, password) {
// 	const user = {
// 		name,
// 		email,
// 		password,
// 		checkPassword: function (inputPassword) {
// 			return user.password == inputPassword
// 		}
// 	};
	
// 	return user;
// }

// 1.생성자 
function User(name, email, password) {	
	this.name = name;
	this.email = email;
	this.password = password;
}

User.prototype.checkPassword = function (inputPassword) {
	return this.password == inputPassword
}

console.log(userHSH.checkPassword('111111'))