//자바스크립트=객체지향언어
//객체구분>변수생성>변수활동속성,이벤트,메소드
//--------------------------------------getElement 객체방법
const ulWrap =document.getElementById('wrap')
const liTag =document.getElementsByTagName('li')
const aTag =document.getElementsByTagName('a')
//--------------------------------------querySelector 객체방법
const ulWrapQ =document.querySelector('ul')
const liTagQ =document.querySelectorAll('li')
const aTagQ =document.querySelectorAll('a')
//const aTagQ1=doqument.querySelectorAll('#wrap a:nth:-child(1))
//--------------------------------------변수정상출력확인
console.log(ulWrap);
console.log(liTag);
console.log(aTag);
console.log(ulWrapQ);
console.log(liTagQ);
console.log(aTagQ)
//--------------------------------------
console.log('---------------------------------------')
console.log('li태그 변수값은'+liTagQ[0]+'입니다.')
console.log('1+1='+(1+1));
console.log('7x4='+(7*4));
console.log(`1+1=${1+1}`);
console.log(`7x4=${7*4}`);
console.log(`li태그 변수 값은 ${liTagQ[0]}입니다`);