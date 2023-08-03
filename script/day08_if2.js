//if 2단, 3단이상 조건식을 여러개 작성하는 방법 / else if = 여러번 가능
/*
    if(조건식1){
        조건식1 참일경우 실행
    }else if(조건식2){
        조건식1 거짓이고 조건식 2가 참일 경우 실행
    }else if(조건식3){
        조건식1,2 거짓이고 조건식3이 참일 경우 실행 
    }else{
        모든 조건식이 거짓일 때 실행
    }
*/
/*
    if(조건식){참일때 실행}
    if(조건식){참일때 실행} //다른 조건식.
*/
const a = 50
if(a>0 && a<11){
    console.log('a는 1~10사이값이다')
}else if(a>10 && a<51){
    console.log('a는 11~50사이 값이다')
}else {
    console.log('a는 조건 밖 값을 가지고 있다.')
}

// 경품 추첨기
// 추첨 번호를 입력받고 추첨 번호에 따라 상품 출력
// 1 : 냉장고 2: 세탁기 3: 컴퓨터 그 외 모든 숫자 꽝!
const num = Number(window.prompt('추첨번호를 입력하세요'))
if(num === 1){
    window.alert('냉장고')
}else if(num === 2){
    window.alert('세탁기')
}else if(num === 3){
    window.alert('컴퓨터')
}else{
    window.alert('꽝!')
}