var data1 = '10';
var data2 = 10;
console.log(data1, typeof data1);
console.log(data2, typeof(data2));

// 값의 자료형을 확인할 때 사용한다.
// typeof 연산자,  typeof() 함수

var data1 = true;
console.log(data1, typeof(data1));

// undefined undefined 출력
// 선언하기 전에 출력해도 에러가 나지 않는다.
console.log(name, typeof(name));
var name = "렛츠끼끼";
// 렛츠끼끼 string
console.log(name, typeof(name));

// 🧡hoisting : 선언의 위치에 관계없이 존재하면 메모리에 할당된다.
// 초기화 작업은 호이스팅되지 않고 선언만 호이스팅 된다.

var data3 = '값 수정 금지';
// var를 사용하여 변수를 선언한다. 오래된 JS 버전에서 사용된다.
// let, const 사용하는 것이 권장됨 (변수 스코프, 호이스팅 동작)
console.log(data3, typeof data3);
data3 = 2024;
console.log(data3, typeof data3);