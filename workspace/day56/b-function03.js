// 익명함수, 콜백함수
// 이름이 없는 함수. 변수에 저장하여 사용한다. 변수명을 함수처럼 사용할 수 있다.

let printAll = function (num) {
    console.log("[printAll] : " + num);
}
printAll(100);


// 익명함수 만들기 실습
let result = function (num) {
    if(typeof(num) === 'number' && num % 2 === 0)   // 매개변수 자료형이 number인 경우에만 참이 되도록 조건을 추가해준다.
        console.log("[result] 짝수," + (num + 10));
    else 
        console.log("[result] 홀수," + num);
}
result(20);
result(11);
result('20');   // 2010 
                // num % 2연산을 할 때 문자열 num이 Number 타입으로 자동 캐스팅 된다.
                // '20' % 2 === 0  이 true로 평가된다.
                // Number 자체가 숫자 20이 되는건 아니기 때문에 '20'+10 의 결과인 2010이 출력된다.



// 콜백함수 : 함수의 매개변수로 전달되는 함수를 의미한다.
function resultNum(num, callback) {
    for(let i=0; i<num; i++) {
        callback(i);   // 익명함수(0, 1, 2, 3, 4) / result(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    }
}
resultNum(5, function (n) {     // 익명함수를 직접 인수에 전달할 수 있다
    console.log(n*2);   // 0 2 4 6 8
})
resultNum(10, result);