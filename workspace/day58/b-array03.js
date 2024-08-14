// 배열 메서드-2

// ❤pop() : 마지막 요소를 삭제
// ❤shift() : 첫 번째 요소를 삭제
// ❤splice(인덱스번호, 개수) : 인덱스 번호를 삭제
// ❤splice(개수) : 매개변수를 1개 전달하면 0번째 인덱스부터 n개가 삭제된다.
let number = [1,2,3,4,5,6,7,8];

console.log(number);
console.log(number.pop());     // 삭제되는 값을 리턴한다. (8)
console.log(number);           // 마지막 인덱스가 삭제된 것을 확인할 수 있다.
console.log(number.shift());           // 삭제되는 값을 리턴한다. (1)
console.log(number);                   // [ 2, 3, 4, 5, 6, 7 ]
console.log(number.splice(2, 2));      // 삭제되는 값을 리턴 [ 4, 5 ]
console.log(number);                   // [ 2, 3, 6, 7 ]
console.log(number.splice(2));         // [ 6, 7 ]

// ❤splice(인덱스, 개수, ...args) : 교체
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers2.splice(1, 1, 0));      // [2]
console.log(numbers2);      // [1, 0, 3, 4, 5, 6, 7, 8]





// ❤indexOf(값) : 값을 배열에서 찾은 뒤 인덱스 번호를 반환
//                 값을 찾지 못하면 -1 리턴
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr.indexOf(10));       // -1
console.log(arr.indexOf(3));        // 2


// ❤fill(값) : 배열의 모든 요소를 해당 값으로 채우기
const arr2 = new Array(5).fill(10);

// ❤fill(값, 시작인덱스, 종료인덱스) : 시작인덱스 ~ 종료인덱스-1 까지 해당 값으로 채운다
const arr3 = new Array(10).fill(7, 2, 5);
console.log(arr3);      // [ <2 empty items>, 7, 7, 7, <5 empty items> ]
                        // 값이 들어가지 않은 나머지 공간이 0으로 채워지는게 아니라 계속 비어있는 상태이다.



