//비타민A가 1219마이크로그램. 하루 권장량의 174% 30일 먹으면 30일권장량의 몇퍼센트를 초과했고 몇 마이크로그램 초과됐는가
const drugOnce = 1219
const drugRequired = Math.floor(drugOnce / 174 * 100)
console.log('month needs:', drugRequired * 30, 'g')
console.log('over amount:', (drugOnce - drugRequired) * 30, 'g')
console.log('over percent:', (174 - 100) * 30, '%')
