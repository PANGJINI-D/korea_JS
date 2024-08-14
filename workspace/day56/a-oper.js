// 연산자 - 관계연산, 논리연산, 삼항연산자

// 1️⃣관계연산자
console.log("=====관계연산자=====");
let data1 = "1";
let data2 = 1;

console.log(data1, typeof(data1));
console.log(data2, typeof(data2));

console.log(data1 == data2);        // 값만 비교 true
console.log(data1 === data2);       // 값과 타입 비교 false

// JS에서 false -> 0, 0.0, "", null, undefined, NaN
let data;
if(data) {
    console.log(typeof(data), "true값");
} else {
    console.log(typeof(data), "false값");
}


// 2️⃣논리연산자
console.log("=====논리연산자=====");
let data3;
data3 = data3 || 1;
console.log(data3);     // 1 출력

// 논리합(or)
// 둘 중 하나라도 참인 경우에는 참인 값이 출력
console.log(undefined || 1);    // 1
console.log(1 || undefined);    // 1

console.log(Boolean(1), typeof(Boolean(1)));    // true boolean
console.log(Boolean(undefined), typeof(Boolean(undefined)));    // false boolean

// 논리곱(and)
// 선행조건식이 false면 뒤의 문장 실행 안됨
// 선행조건식이 true면 뒤 문장이 실행됨
console.log(undefined && 1);    // undefined
console.log(1 && undefined);    // undefined

// 논리부정(not)
console.log(!true);
console.log(!false);
console.log(!null);
console.log(!undefined);

// 병합연산자 (??)
// 왼쪽 값이 null/undefined인 경우에만 오른쪽 값을 반환
let user = null;
let value = "default value";
console.log(user, typeof(user));    // null object
console.log(Boolean(user), typeof(Boolean(user)));  // false boolean

console.log(user ?? value);     // default value
console.log(1 ?? value);        // 1

// Optional Chaining (?.)
// 객체에서 undefined나 nll에 접근할 경우 에러가 발생한다.
let users = {
    profile: {
        name: "황진",
        age: "20",
    }
};
console.log(users);     //{ prifile: { name: '황진', age: '20' } }

let userName = users?.profile?.name;
console.log(userName);          //황진
console.log(users.profile.name) //황진

let userCountry = users?.profile?.address?.country;
console.log(userCountry);       //undefined
// console.log(users.profile.address.country);
// 에러 발생 : 정의되지 않은 country에 접근했기 때문

let data4 = user?.profile?.name ?? value;
console.log(user?.profile?.name);   // undefined
console.log(data4);                 // default value

console.log(NaN == null);           // false
console.log(NaN, typeof(NaN));      // NaN number
console.log(null, typeof(null));    // null object



// 3️⃣삼항연산자
let age = 20;
let isAdult = age>=19 ? "성인" : "미성년";
console.log(isAdult);       // 성인