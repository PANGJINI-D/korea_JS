// ❤global
// globalThis 객체를 사용해서 전역변수를 설정하고 함수 내부에서 변수 값을 변경
// js 환경에 따라 전역 객체에 접근하는 방법이 달라서 코드의 이식성이 떨어졌다.
// globalThis는 이를 극복하기 위해 도입된 표준화된 방법이다. (ES11에서 도입)

globalThis.num;
let n1 = 10;
let n2 = 20;

function changeNumber(n1, n2) {
    globalThis.num = n1;
    console.log(globalThis.num);
    n1 = n2;
    n2 = globalThis.num;
    console.log(n1, n2);
}

// let : 블록 스코프
globalThis.str = "Hello";
console.log(globalThis.str);

function data() {
    globalThis.strData = "값변경";
}
console.log(data());
console.log(globalThis.strData);