//getElement... 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');// 모든 대상 보여줌
const aFirst = document.getElementsByClassName('first')
const aLast = document.getElementsByClassName('last')
console.log(mainTag, hTag[0], contentsCls[0], boxId, aFirst[0], aLast[0]);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
//querySelector... 방법
const mainTagQ =document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
// const aTagQ = document.querySelector('a'); //2개 이상일때 첫번째로 읽는 대상만 보여줌.
const aTagQ = document.querySelectorAll('a') //2개 이상일때 모든 대상 보여줌(getElement 처럼) 이 경우 인덱스 붙여줘야함
const aFirstQ = document.querySelector('.first')
const aLastQ =document.querySelector('.last')
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ, aFirstQ, aTag[0], aLastQ, aTag[2]);
console.log(aTagQ,aTagQ[0],aTagQ[1],aTagQ[2])