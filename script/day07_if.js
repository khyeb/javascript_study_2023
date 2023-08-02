//전역변수, 지역변수(함수 내=지역/외부=전역 생성한 변수위치 차이)
let b = 20//전역 함수 바깥에서 생성된 변수
let c = 30//전역 전역변수는 함수 내, 외 모두 사용 가능하다.
function test() {// 함수 내에서 생성된 변수 = 지역변수
    let a = 10 //지역변수는 함수 내에서만 사용할 수 있다.
    console.log(a+b)//지역 O
}
test()//전역
// console.log(a)//전역 X //지역변수를 바깥에서 사용 시 에러 발생.
// console.log(a+b)//전역 X
console.log(b+c)//전역 O
console.log('------------------------------------------')
//조건문 - 논리 데이터 참(true), 거짓(false)
let num1 = 5
let num2 = 7
let num3 = '5'
console.log(num1==num2) //false
console.log(num1 < num2) //true
console.log(num1==num3) //true (데이터 타입 구분 X)
console.log(num1===num3)//false (데이터 타입 구분 O)
console.log(num1!=num3)//false (데이터 타입 구분 X)
console.log(num1!==num3)//true (데이터 타입 구분 O)
console.log(num1>=num2)//false
console.log(num1<=num2)//true
console.log('-----------------------------------------')
// 조건문
//if(조건식){조건식이 참일 때 실행결과} 조건식 종료위치
//상황 1. 주말에 날씨가 좋으면 등산가자!
let weather = ['비','맑음','흐림']
if(weather[2]==='맑음'){
    console.log('등산을 가자!')
}
console.log('-----------------------------------------')
let d = true
let e = false
let f = 10
let g = 20
if(d===true) {console.log('실행1')}//O d는 참과 같다 
if(f>10) {console.log('실행2')}//X f는 10 보타 크다
if(g<=20) {console.log('실행3')}//O g는 20보다 작거나 같다
if(e!==true) {console.log('실행4')}//O e는 참이 아니다
console.log('-----------------------------------------')
// 관리자만 접속할 수 있는 페이지
// 관리자 아이디일 경우만 접속가능 (접속후 인사말 출력)
/* const userId =window.prompt('아이디를 입력하세요')
if(userId==='admin'){
    window.alert('관리자님 환영합니다.')
} */
//사용자의 나이를 입력받고 10살 이하 '놀이기구 탑승불가'
/* const age = Number(window.prompt('나이를 입력하세요'))
if(age<=10){
    window.alert('놀이기구 탑승불가')
} */

const userPrint = window.confirm('인쇄할까요?')
if(userPrint===true){
    window.print()
}