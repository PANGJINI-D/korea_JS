let boxClick = document.querySelector('#click');
let boxOver = document.querySelector('#over');
let boxOut = document.querySelector('#out');
let boxOverOut = document.querySelector('#over-out');

// 🌟화살표 함수에서 this 쓰지 말어라
// const changeBgGreen = () => {
//     // boxClick.setAttribute('style', 'background-color:green');
//     // console.log(this);
//     this.setAttribute('style', 'background-color:green');
// }
function changeBgGreen() {
    this.setAttribute('style', 'background-color:green');
}

// const changeBgBlue = () => {
//     this.setAttribute("style", "background-color:blue");
// }
function changeBgBlue() {
    this.setAttribute("style", "background-color:blue");
}

boxClick.addEventListener('click', changeBgGreen);

boxOver.addEventListener('mouseover', () => {
    boxOver.setAttribute("style", "background-color:pink");
});

boxOut.addEventListener("mouseout", changeBgBlue);

boxOverOut.addEventListener("mouseover", changeBgGreen);
boxOverOut.addEventListener("mouseout", changeBgBlue);
