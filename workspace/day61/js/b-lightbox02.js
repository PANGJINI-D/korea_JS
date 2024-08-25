let testBtn = document.querySelectorAll('.img-box button');
let bigImgWrap = document.getElementsByClassName('big-img-wrap');

for(let i=0; i<testBtn.length; i++) {
    testBtn[i].addEventListener("click", function() {
        bigImgWrap[0].style.display = "flex";

        // 버튼에는 원래 src 속성이 없다.
        // 자바스크립트에서 사용하기 위해 부여한 data-src 속성을 가져온다.
        let src = this.getAttribute("data-src");
        let bigImg = document.querySelector('.big-img');
        bigImg.setAttribute('src', src);
    });
}

bigImgWrap[0].addEventListener("click", function() {
    this.style.display = "none";
});