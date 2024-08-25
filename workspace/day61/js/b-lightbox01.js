let testImg = document.getElementsByClassName('test-img');
let bigImageWrap = document.getElementsByClassName('big-img-wrap');

//모든 testImg에 클릭이벤트 주기 위해 반복문 사용
for(let i=0; i<testImg.length; i++) {
    // 라이트박스 이벤트
    testImg[i].addEventListener("click", function (){
        let src = this.getAttribute('src');
        let bigImg = document.querySelector('.big-img');
        bigImg.setAttribute('src', src);

        bigImageWrap[0].style.display="flex";
    })

    // 라이트 박스 클릭 시 사라지도록 처리함
    bigImageWrap[0].addEventListener("click", function (){
        this.style.display = "none";
      });
}

