// 비동기


function func1() {
    console.log('함수1 실행');
    func2();
}

function func2() {
    setTimeout(() => {
        console.log("함수2 실행")
    }, '2000');     //1초 뒤에 실행
    func3();
}

function func3() {
    setTimeout(() => {
        console.log("함수3 실행")
    }, '1000');      // 0.5초 후 실행
}

func1();
/*
함수1 실행
함수3 실행
함수2 실행

함수 실행은 1-2-3 순서이지만
각각의 setTime이 지나고 나서 출력된다.
*/