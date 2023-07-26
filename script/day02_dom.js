// dom == document object model
// 자바스크립트 = 객체지향언어
// bom == browser object model 웹브라우저의 기본객체
// 다른파일이어도 중복 x
// let hello = 'hello js';
// window.alert(hello);
// let qa = window.prompt('1+1?');
// window.alert('정답은 '+qa+'입니다');
// let ox = window.confirm('자바스크립트는 객체지향언어다.'); //확인=true(참) 취소=false(거짓)
// window.alert(ox);

// 객체.속성
// 객체.메서드()
// 객체.속성.메서드()

// 아이디 객체 변수 대입하기
// 변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1');//객체.메서드('문자')
const loginBtn = document.getElementById('login');
const payBtn = document.getElementById('pay');
const price = document.getElementById('price')
console.log(btn1); // console.log(btn1, loginBtn, payBtn, price)
console.log(loginBtn);
console.log(payBtn);
console.log(price);
loginBtn.style.color = 'blue';
btn1.style.color = 'red';
payBtn.style.color = 'green';
price.style.color = 'hotpink';

//클래스 객체변수 생성하기
const li_first = document.getElementsByClassName('first');//Element's'
const li_second = document.getElementsByClassName('second');
const last = document.getElementsByClassName('last');
console.log(li_first);
console.log(li_second);
console.log(last);
console.log(li_first[0]);
console.log(li_first[1]);
const header =document.getElementsByTagName('header');
const logo = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const aTag = document.getElementsByTagName('a');
console.log(header, logo, nav ,aTag);
console.log(aTag[0]);

//innerHTML 속성 활용
//객체.속성//읽기
//객체.속성 = 대입값//수정or삭제
console.log(header.innerHTML); //undefined
console.log(header[0].innerHTML); //자식,자손 읽기 // Tag Class 반드시 인덱스로 구분!
console.log(logo[0].innerHTML);
console.log(logo.innerHTML); //undefined
console.log(last[1].innerHTML);
console.log(payBtn.innerHTML);

logo[0].innerHTML = '로<br>고';
btn1.innerHTML = '전송';
payBtn.innerHTML = '결제';
last[1].innerHTML = 'last';
aTag[0].innerHTML = '메뉴';
aTag[2].innerHTML = ''; //빈 문자열 == 문자열을 비운다.(삭제)
price.innerHTML = '20,000원'


nav[0].style.backgroundColor = 'aqua';
nav[0].style.border = '2px solid black';
nav[0].style.fontSize = '2rem'
price.style.color = 'red';
price.style.transform = 'rotate(20deg)'
aTag[1].style.color = 'green';
payBtn.style.filter = 'blur(1px)'
loginBtn.style.background = 'linear-gradient(90deg, pink,lightblue)';