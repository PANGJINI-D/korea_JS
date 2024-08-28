let slideBox = document.querySelector(".slide-box");
let slideImg = document.querySelectorAll(".slide-img");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

//슬라이드의 너비, 현재 인덱스, 슬라이드 개수 설정
let slideWidth = 800;
let currentIdx = 0;
let slideCnt = slideImg.length;

//슬라이드가 처음이나 마지막에 도달했는지 확인하고 이전/다음 버튼을 표시 or 숨김처리
function checkEnd(){
  if(currentIdx <= 0){
    prevBtn.style.display = "none";
  }else{
    prevBtn.style.display = "block";
  }

  if(currentIdx >= slideCnt - 1){
    nextBtn.style.display = "none";
  }else{
    nextBtn.style.display = "block";
  }
}

checkEnd();

//다음 버튼 클릭시 발생하는 이벤트
nextBtn.addEventListener("click", function(){
  currentIdx++;
  slideBox.style.left = -(currentIdx * slideWidth) + "px";
  slideBox.style.transition = '0.5s ease';
  checkEnd();
});

//이전 버튼 클릭시 발생하는 이벤트
prevBtn.addEventListener("click", function(){
  currentIdx--;
  slideBox.style.left = -(currentIdx * slideWidth) + "px";
  // slideBox의 left 속성을 적용(absolute와 같이 사용되어 슬라이드를 이동시킨다)
  // currentIdx에 따라 동적으로 변경된다 currentIdx가 0일 때 0
  // currentIdx가 1일 때 -800px, currentIdx가 2일 때 -1600px으로 왼쪽으로 이동된다
  slideBox.style.transition ='0.5s ease';
  checkEnd();
})