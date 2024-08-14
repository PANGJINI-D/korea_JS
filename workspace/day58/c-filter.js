// 💚filter
// 조건의 결과에서 true인 값들만 반환한다.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1부터 10까지 요소 중 짝수만 필터링
const even = nums.filter((element) => element%2==0);
console.log(even);      // [ 2, 4, 6, 8, 10 ]

// 짝수 인덱스의 요소만 출력
const evenIdx = nums.filter((element, i) => i%2===0);
console.log(evenIdx);   // [ 1, 3, 5, 7, 9 ]

// 배열의 짝수요소를 두배로 만든 새로운 배열 생성
const evenVal = nums.filter((num) => num % 2 === 0)
                .map((even) => even * 2);
console.log(evenVal);   // [ 4, 8, 12, 16, 20 ]