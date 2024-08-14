
// 1️⃣배열 리터럴
let arr = [];
console.log(arr, typeof arr);   //[] object

// 배열 내부에 값 삽입 (다른 타입을 한 배열에 담을 수 있다)
arr[0] = 10;
arr[1] = '키키킥';
arr[2] = 1.77;
console.log(arr, typeof arr);   // [ 10, '키키킥', 1.77 ] object

// 생성과 동시에 초기화
let arr2 = [1, 2, 3];
console.log(`[배열 길이] ${arr2.length}`);

// 배열 크기만 지정하기
let arr3 = [,,,];
console.log(arr3, arr3.length);


// 2️⃣Array() 생성자 함수로 배열 생성
let arr4 = new Array();
console.log(arr4, typeof arr4);

arr4[0] = '사과';
arr4[1] = '복숭아';
arr4[2] = '체리';
console.log(arr4);

// Array 생성자 함수로 초기값 할당
let arr5 = new Array('0번째', 1, true);
console.log(arr5, typeof arr5);

// Array 생성자 함수로 크기만 지정
let arr6 = new Array(5);
console.log(arr6, arr6.length);

// arr5의 값 출력하기
for(let i in arr5) {
    console.log(arr5[i]);
}


// ❤JS 배열 순회시 사용할 수 있는 반복문
// for in : key값 순회   /   for of : value값 순회
let arr7 = ['a', 'b', 88];

for(let i in arr7) {
    console.log(`[i] ${i}`);
    console.log(`[arr7[i]] ${arr7[i]}`);
}
for(let value of arr7) {
    console.log(`[let of] ${value}`);
}