// ❤재귀함수

// 팩토리얼 계산
function factorial(n) {
    // 재귀함수의 종료 조건!!
    if(n === 0 ) {
        return 1;       // n이 0이 되면 1을 곱해주기 위해 1 return (곱하기 1의 결과는 원래 결과와 동일하기 때문)
    }
    // 재귀호출
    console.log(n);
    return n * factorial(n-1);
}
console.log(`[factorial] ${factorial(3)}`);


// 재귀함수를 이용해서 문자열 뒤집기
// hello => olleh 출력
// substr(1) : 첫 번째 문자열을 제거하고 나머지 문자열을 반환하는 메서드
// slice(1)

function reverseStr(str) {
    // 0 1 2 3 4
    //뒤에서부터 하나씩 리턴
    if(str === "") {
        return str;
    }
    console.log(str);
    return reverseStr(str.substr(1)) + str[0];
    
}
console.log(reverseStr('hello'));