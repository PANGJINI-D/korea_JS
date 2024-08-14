// 1️⃣ 문자열을 인수로 받아 역순으로 뒤집을 결과를 반환하는 함수
// 콜백을 사용하여 문자열을 역순으로 출력
//함수명 printStr()  매개변수 1개
//함수명 reverseStr() 콜백사용

// 문자열 뒤집기
const reverseStr = (str, callback) => {
    // const reverseResult = str.reverse();
    // 문자열에는 reverse()함수가 없기 때문에 문자열을 배열로 바꾼 후, 배열을 다시 문자열로 만들어야 한다.

    const reverseResult = str.split("").reverse().join("");
    if(callback) {
        callback(reverseResult);
    }
    return reverseResult;
};

// 출력하기
const printStr = (reverseResult) => {
    console.log(`[문자열 뒤집기] ${reverseResult}`);
};

reverseStr("hello", printStr);



// 2️⃣성과 이름을 전달받아서 풀네임을 만든 뒤 000님 환영합니다 출력하기
// 풀네임 만들기
const makeFullname = (lastName, firstName, callback) => {
    const fullName = String(lastName) + String(firstName);
    if(callback) {
        callback(fullName);
    }
    return fullName;
}

// 출력하기
const printName = (fullName) => {
    console.log(`${fullName}님 환영합니다😎`);
}

makeFullname(1, 2, printName);
makeFullname("마라","탕", printName);



// 3️⃣사용자 나이를 입력후 성인이면 true반환, 아니면 false 반환
const isAdult = (age, callback) => {
    isAdultResult = age>=20 ? 'true' : 'false';
    if(callback) {
        callback(isAdultResult);
    }
    return isAdultResult;
}
const printAdult = (isAdultResult) => {
    console.log(`[성인 여부] ${isAdultResult}`);
}
isAdult(19, printAdult);
isAdult(29, printAdult);



// 4️⃣객체를 사용해 성적관리 프로그램 만들기
//프로그램이 등록되지 않은 학생은 3명이다
//이름 : 둘리, 나이 : 5, 점수 : 80
//이름 : 도우너, 나이 : 6, 점수 : 50
//이름 : 또치, 나이 : 5, 점수 : 90
// 학생마다의 점수 출력하기(이름 점수 같이 출력할 것)
// 3명을 모두 프로그램에 등록시킨다 ---> ???? 문제 이해 못함❌
// 3명의 학생 정보를 학교 객체로 선언 후에 학교 객체에 등록시킨다

// 학생 객체
const Student = {
    "stu1" : {
        name : "둘리",
        age : 5,
        score: 80,
    },
    "stu2" : {
        name : "도우너",
        age : 6,
        score: 50,
    },
    "stu3" : {
        name : "또치",
        age : 5,
        score: 90,
    },
}

// 학생의 이름과 점수 출력하기
for(let i in Student) {
    // console.log(i);
    // console.log(Student[i]);
    console.log(`[이름] ${Student[i].name}  [점수] ${Student[i].score}`);
}

// 학교 객체
const School = {
    name : "어쩌고학교",
    address : "주소주소",
    students : Student,
}
console.log(School);


//5. 포인트를 각각 객체에 추가하고 순서대로 point는 80, 50, 90이다
//포인트를 모두 더한 값을 출력하라
let pointSum = 0;
for(let i in Student) {
    Student[i].point = Student[i].score;
    pointSum += Student[i].point;
}
console.log(`[point 합] ${pointSum}`);

