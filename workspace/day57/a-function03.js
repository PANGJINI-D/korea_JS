//❤콜백함수
// 


// 콜백함수에 익명함수 정의
function userInput(name, callback) {
    callback(name);
}


// 콜백함수 호출할 때 익명함수 전달
userInput('황진', function(name) {
    for(let i=0; i<5; i++) {
        console.log(name);
    }
});


// 두 정수의 덧셈 결과를 출력
function add(n1, n2, callback) {
    if(callback) {
        callback(n1 + n2);
    }
    return n1 + n2;
}
const print = function (result) {
    console.log(result);
}

const result = add(10, 5, print);
console.log(result);
// const result = add(10, 5, print());
// print를 콜백함수로 전달한다.
// print에 중괄호가 없어도 함수가 실행된다.
// 콜백함수로 전달될 때 함수 이름만 전달하고 add 함수는 전달된 print 함수를 호출하는 시점에서 print(result)를 호출하게 된다.
// 함수를 즉시 호출하는 경우 함수를 즉시 실행시키고 반환값을 전달하는것

// ❤강의주석
// print 함수 콜백함수로 사용된다, 단순히 값을 받아서 console.log를 이용해 출력하는 역할을 한다
// 콜백함수로 전달 될 때 함수이름만 전달하는데
// add함수는 전달된 print 함수를 호출하는 시점에서 print(result)와 같이 호출하게 된다
// 함수를 즉시 호출하는 경우 함수를 즉시 실행시키고 반환값을 전달하는 것이다 
// print 함수는 반환값이 없으므로 맞지 않다



// 두 정수의 곱셈을 구한 뒤 2를 곱해서 출력하기
// 함수명: mul
// 기능1 - 두 정수를 곱하는 기능
function mul(n1, n2, callback) {
    if(callback) {
        callback(n1 * n2);
    }
    return n1 * n2;
} 

// 기능2 - 곱셈의 결과에 2를 곱해서 출력하는 기능
const printMul = function(result) {
    console.log(result * 2);
}
mul(2, 3, printMul);    // 12 출력
const result2 = mul(2, 3, printMul);
console.log(result2);   // 6 출력

// 두 문장의 출력값이 다른 이유
// 위의 문장은 콜백함수인 printMul의 출력 결과가 출력된 것이고
// 아래 문장의 result2는 mul의 return 값인 두 정수의 곱이 출력되기 때문이다.