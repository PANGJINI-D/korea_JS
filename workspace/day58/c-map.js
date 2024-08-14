// 💚map
// let newArray = 배열명.map(callback(element[, index[, array]][, thisArgs]));

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// 배열의 각 요소에 2를 곱한 값을 새로운 배열로 반환
const newArr = arr.map((element) => {
    return element * 2;
})
console.log(newArr);        // [ 2,  4,  6,  8, 10, 12, 14, 16 ]


// 배열의 각 요소의 문자열 길이를 담은 새로운 배열로 반환
let arr2 = ['java', 'dbms', 'js', 'web'];
const newArr2 = arr2.map((element) => element.length );
console.log(newArr2);       // [ 4, 4, 2, 3 ]


// 배열의 각 객체의 특정 프로퍼티 값을 새로운 배열로 반환
const users = [
    {name : "짱구", age: 5},
    {name : "철수", age: 5},
    {name : "맹구", age: 5},
    {name : "유리", age: 5},
]

const names = users.map((element) => element.name);
console.log(names);     // [ '짱구', '철수', '맹구', '유리' ]


// 배열의 각 요소에 인덱스를 추가하여 새로운 배열로 반환
const nums = [1, 2, 3, 4, 5];
const numIdx = nums.map((element, index) => {
    return [element, index];
});
console.log(`nums : ${nums}`);
console.log(`numIdx : ${numIdx}`);

const numIdx2 = nums.map((element, index, array) => {
    return {element: element, index: index, originArray: array};
});
console.log(numIdx2);


// thisArgs는 콜백함수 내에서 this 키워드를 사용할 때 참조할 객체를 지정할 수 있다
const mul = {multi: 2};
const numIdx3 = nums.map((element, index, array) => {
    return {
        element: element * mul.multi,
        index: index,
        array: array,
    };
}, mul);
console.log(numIdx3);