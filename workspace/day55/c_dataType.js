
// number
console.log(3.14, typeof(3.14));
console.log(5, typeof(5));
console.log(Infinity, typeof(Infinity));    //Infinity number (양의 무한대)
console.log(-Infinity, typeof(-Infinity));  //-Infinity number (음의 무한대)
console.log(NaN, typeof(NaN));

// number 타입으로 변환
let num1 = "123"; // number로 형변환
let str = "끼끼";   // NaN으로 형변환된다
let num = Number(str);
console.log(str, typeof(str), num, typeof(num));

//String
console.log("hello", typeof("hello"));
console.log('hello', typeof('hello'));
console.log(`hello`, typeof(`hello`));

let numStr = String(num1);
console.log(numStr, typeof(numStr));


// boolean
console.log(true, typeof true);
console.log(false, typeof false);
console.log("", typeof ""); //string
console.log(Boolean(""), typeof Boolean("")); //false boolean
console.log(Boolean(" "), typeof Boolean(" ")); //true boolean
console.log(Boolean(undefined));    //false


// Falsy : JS에서 논리적으로 거짓으로 평가되는 값
//          false | 0 | -0 | 0n | "" | null | undefined | NaN
// Truthy : JS에서 논리적으로 참으로 평가되는 값

// true | false : boolean 타입의 명확한 값으로 참과 거짓을 나타낸다
// Falsy | Truthy : 특정 값득ㄹ이 논리적 평가(조건문 등)에서 어떻게 처리되는지를 설명하는 개념이다.
// Falsy는 false처럼 동작하고 Truthy는 true처럼 동작하는 값들이다.


// undefined
// null
console.log(undefined, typeof(undefined));
console.log(Boolean(undefined), typeof(undefined)); //false undefined
console.log(null, typeof(null));
console.log(Boolean(null), typeof(null)); //false object

// Symbol
// 심볼은 고유함을 보장하며 객체의 키로 심볼 사용이 가능하다.
console.log(Symbol(), typeof(Symbol()));    //Symbol() symbol
console.log(Symbol("설명"), typeof(Symbol("설명"))); //Symbol(설명) symbol

let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 == sym2);      //false
console.log(sym1 === sym2);     //false

// Object
// 객체 : 키-값 쌍의 집합
let person = {name:"황진", age:20, isStudent:false};
console.log(person, typeof(person));    //{ name: '황진', age: 20, isStudent: false } object

// 배열
let arr = [1, 2, 3];
console.log(arr, typeof(arr));  // [ 1, 2, 3 ] object

// 함수(단독 가능), method(클래스 안에서)
function printNum() {
    console.log(1, typeof(1));  // 1 number
}
// [Function: printNum] function
// function 타입도 object 객체로 취급한다.
console.log(printNum, typeof(printNum));    