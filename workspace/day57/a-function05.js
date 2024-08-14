//❤화살표함수
const add = (num1, num2) => {
    return num1+num2;
}
// 실행부에 문장이 하나만 있는 경우 중괄호 생략할 수 있다.
// 리턴문만 있는 경우 리턴 키워드까지 생략할 수 있다.
const add2 = (n1, n2) => n1+n2;
console.log(add(1, 2));


// 이름과 나이를 매개변수에 저장하여 출력하는 화살표함수
// 함수명 printInfo
const printInfo = (name, age) => console.log(`[이름] ${name}   [나이] ${age}`);
printInfo('마라탕', 5);


// 두 정수의 곱셈을 구한 뒤 결과에 3을 곱해서 출력하기
// 함수명: mul
const mul = (n1, n2, callback) => {
    if(callback) {
        callback(n1*n2);
    }
    return n1 * n2;
}
mul(2, 3, (result) => console.log(result*3));