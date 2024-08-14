//❤즉시처리함수
// 한 번만 사용하는 함수로 정의와 동시에 실행된다
// 재사용되지 않기 때문에 보통 익명함수로 작성된다.

// 매개변수 없음
(function() {
    console.log("js 4일차");
})();

// 매개변수 있음
let result = (function(n1, n2) {
    return n1 + n2;
})(10, 20);
console.log(result);


