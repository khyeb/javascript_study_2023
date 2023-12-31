let a = 10;
let b = 5;
let c = 1;
console.log(`${a}+${b}=${a+b}`);//10+5=15 
console.log(a+'+'+b+'='+(a+b));//10+5=15
console.log(`${a}-${c}=${a-c}`);//10-1=9
console.log(`${b}X${c}=${b*c}`);//5x1=5
console.log(`${a}/${b}=${a/b}`);//10/5=2
console.log(`${a}%${b}=${a%b}`);//10%5=0
console.log('--------------------------');
//연결연산자
console.log('10'+10); //1010 연결연산자
console.log(10+10); //20 더하기연산자
console.log(typeof('10'+10));//string
console.log(typeof(10+10));//number
console.log('--------------------------');
let age =20;
//age = age+1;
age += 1 // 복합연산자
console.log(`${age}살`);//21살
age -= 1 //age = age-1 
console.log(age);//20
age *= 5 //age = age*5
console.log(age);//100
age /= 2 //age = age/2
console.log(age);//50
age %= 2//age = age%2
console.log(age);//0
console.log('--------------------------------')
// 복합대입전산자를 이용한 태그 생성방법
let cart_li='<ul>';//빈 장바구니 (초기)
// 참기름 1개 장바구니 담기
cart_li +='<li>참기름1개</li>';
// 베이글 2개 장바구니 담기
cart_li +='<li>베이글2개</li>'
cart_li +='</ul>'
console.log(cart_li);
console.log('--------------------------------')
// 태그 생성 메서드 createElement('생성태그명')
let cartNewLi = document.createElement('ul');
const cart_contents = document.querySelector('#cart .contents')
cartNewLi.innerHTML = '<li>참기름 1개</li>'
cartNewLi.innerHTML += '<li>베이글 2개</li>'
console.log(cartNewLi);
console.log(cart_contents);
cart_contents.appendChild(cartNewLi); //앞의 객체의 자식으로 (값) 삽입