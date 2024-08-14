// ❤배열의 메서드

let numbers = [10,5,3,2,7,9];
console.log(numbers, typeof numbers);

// ❤push() 배열의 끝에 값 추가
numbers.push(100);
numbers.push(200);
console.log(numbers, typeof numbers);
console.log(numbers[0], typeof numbers[0]);

// 배열의 값 출력
for(let value of numbers) {
    console.log(value);
}

// ❤join() : 전달한 값으로 구분한 뒤 문자열로 리턴
const str = [1, 2, 3, 4, 5].join('-');
console.log(str, typeof str);       // join() 하고 나면 배열이 문자열로 반환된다.

// ❤slice(시작, 끝) : 원하는 부분을 추출하기 위해 시작인덱스, 마지막 인덱스를 전달한다.
//                     마지막 인덱스는 포함되지 않는다. (시작 인덱스 ~ 마지막인덱스-1 까지를 반환)
//                     원본 배열에는 영향을 미치지 않는다.
let number2 = [1,2,3,4,5,6,7,8];

console.log(number2[0]);            // 하나의 값만 추출하는 것 -> indexing
console.log(number2.slice(2, 4));   // [ 3, 4 ]               -> slicing

// 인덱싱은 값을 하나 리턴하고, 슬라이싱은 값이 하나여도 배열 형태로 리턴한다.
console.log(number2[2], number2.slice(2,3));    // 3 [ 3 ]

console.log(number2.slice[2, 5]);       // undefined
// slice[(2, 5)] => number2[5] slice 메서드의 인덱스5에 접근하는 것처럼 해석
// slice가 배열이 아니기 때문에

console.log(number2.slice([2, 5]));     // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// slice는 두 개의 정수를 매개변수로 받는다.
// [2, 5]를 첫 번째 매개변수로 처리하고, 두 번째 매개변수는 undefined로 처리된다.
// 종료 인덱스를 알 수 없기 때문에 number2.slice(0)과 동일하게 작동하게 된다.
// 시작 인덱스를 지정하지 않으면 기본 인덱스가 0이다. 종료 인덱스를 지정하지 않으면 배열의 길이이다.







