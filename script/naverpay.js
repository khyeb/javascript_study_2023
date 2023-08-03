const user_point = document.querySelector('#user_point')
const use_point = document.querySelector('#use_point')
const point_reset = document.querySelector('#point_reset')
const all_use = document.querySelector('#point_all_btn')
console.log(user_point,use_point,point_reset,all_use)
let point= 1000
user_point.value = point.toLocaleString('ko-kr')
point_reset.style.display = 'none'
all_use.addEventListener('click',function(){
    user_point.value = 0
    if(point>=1){
        point_reset.style.display = 'inline'
    }
    if(point>=1000){
        use_point.value= point.toLocaleString('ko-kr')
    }else{
        window.alert('1000원 이상 사용가능합니다.')
    }
})
point_reset.addEventListener('click',function(){
    use_point.value = 0
    if(use_point.value === 0){
        
    }
    user_point.value = point
})