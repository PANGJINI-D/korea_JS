// 일반함수

// 매개변수o 리턴값o
function getAdd(num1, num2) {
    console.log("getAdd num1: ", num1, typeof(num1));
    console.log("getAdd num2: ", num2, typeof(num2));   // getAdd num2:  undefined undefined
    return num1+num2;
}
const result = getAdd(1, 2);
console.log("결과 : " + result);
console.log("결과 : " + getAdd(1, 2));
console.log("결과 : " + getAdd(1));                     // 결과 : NaN

// 디폴트 매개변수 : 값이 전달되지 않을 경우 초기값을 설정할 수 있다
function f1(num1, num2=10) {
    return num1 + num2;
}


// 함수 정의, 호출 실습
function introduce(id, pw, name="user") {
    console.log(`[ID] ${id}   [PW] ${pw}   [이름] ${name}`);
}
introduce('id1', 1234);
introduce('id2', 1234, "황진");


// 가변 매개변수 : 함수 호출 시 몇 개의 값이 전달될지 모를 때 사용한다.
function printAdd(...nums) {
    console.log("printAdd -----> " + nums, typeof(nums));

    for(let i in nums) {
        console.log(`nums[${i}] : ${nums[i]}, ${typeof(nums[i])}`);
    }
}
printAdd(10, 20, 30);

// 동적바인딩 : 컴파일 시 값에 따라 자료형이 동적으로 결정된다.
printAdd('a', true, 5);


// 매개변수로 객체 사용하기
function info(person1) {
    console.log(`[이름] ${person1.name}   [나이] ${person1.age}`);
}
let person1 = {
    name:"황진", age:5
}
info(person1);

