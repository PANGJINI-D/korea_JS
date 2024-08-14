// 일반함수
function showNum(num) {
    console.log('showNum 함수 실행');
    console.log(`num : ${num}`);
    return num;
}
showNum(10);


// 함수도 매개변수로 넘겨줄 수 있다.
function decrease(num) {
    return num-1;
}
console.log("[decrease] " + decrease(showNum(10)));