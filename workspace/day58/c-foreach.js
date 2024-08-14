// 반복문
// 💚forEach(callback)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach((element, index, array) => {
    console.log(`element : ${element}`);    // value 출력
    console.log(`index : ${index}`);        // index번호 출력
    console.log(`array : ${array}`);        // 원본 배열 출력
})