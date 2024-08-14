//❤익명함수

let square = function (x) {
    return x * x;
};
console.log(square(3));


let greet = function (name) {
    return `안녕하세요 ${name}님`;
}
console.log(greet('마라탕'));


setTimeout(function() {
    console.log("2초 후 출력");
}, 2000);