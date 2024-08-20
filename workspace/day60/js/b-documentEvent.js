// window.onload = () => {
//     alert("onload 이벤트 발생");
// }
// 문서가 로드되자마자 alert 알림창이 뜬다.
// alert 창을 닫으면 html 문서의 내용이 보인다.


window.addEventListener("load", () => {
    alert('로드~~');
})

let main = document.querySelector('main');
let color = main.style.backgroundColor;

window.addEventListener("scroll", () => {
    // scrollY 프로퍼티는 현재 Y축의 위치를 가지고 있다.
    let scrollY = window.scrollY;
    console.log(scrollY);

    if(scrollY > 400) {
        main.style.backgroundColor="gold";
    } else if(scrollY > 200) {
        main.style.backgroundColor="skyblue";
    } else if(scrollY > 200) {
        main.style.backgroundColor="pink";
    } else {
        main.style.backgroundColor = color;
    }
});