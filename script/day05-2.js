//배열과 객체
const a = 1 //상수 (변하지 않는 값)
//a = 2 //error (상수값을 변경할 때 에러 발생)
let b = 2 //변수 (변할 수 있는 값)
b += 4 // 새로운 값이 대입될 경우 기존 값 2가 제거되고 4로 새로 대입
console.log(b)
console.log('--------------------------')
const yoil = ['일','월','화','수','목','금','토']
console.log(yoil)
console.log (`오늘은 ${yoil[1]}요일 입니다.`)
//연관된 데이터 2개 이상의 배열로 담을 수 있다.

const color = document.querySelector ('.color')
const weather = document.querySelector ('.weather')
const colorArray = ['white','black','yellow','pink','red']
const weatherArray = ['맑음','비','눈','태풍','흐림']
console.log (colorArray,color,weather)
color.innerHTML = `${colorArray[1]},${colorArray[3]}`
weather.innerHTML = `${weatherArray[0]}`

let optionArray = new Array(4) //빈 배열 4자리 준비
console.log(optionArray)//empty*4
optionArray [0] = 'white'
optionArray [2] = 'M'
console.log(optionArray)
//연관되지 않는 데이터를 묶으면 안된다.