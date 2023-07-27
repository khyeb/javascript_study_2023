//1.변수생성
const btn2 =document.querySelector('#button2');
const btn3 =document.querySelector('#btn3');
const btn4 =document.querySelector('#btn4');
const btn5 =document.querySelector('#btn5');
const input_id =document.querySelector('#user_id'); //정상확인
//2.이벤트 작성
//btn클릭했을때 경고창 띄우기
//객체.이벤트리스너('이벤트종류,함수(){실행결과})
btn2.addEventListener('mouseover',function() {
    btn2.innerHTML='안녕';
});
btn3.addEventListener('click',function(){window.alert('error');});
//btn(변수).addEventListener('(이벤트)',(실행)(){결과})

//btn(변수).addEventListener('(이벤트)',()(){실행})
//btn(변수).addEventListener('(이벤트)',()(){실행})
//btn(변수).addEventListener('(이벤트)',()(){실행})