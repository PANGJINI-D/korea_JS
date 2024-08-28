const pageSize = 5; //한 페이지당 표시될 게시물 수
const totalItems = 20; //총 게시물 수
const totalPages = Math.ceil(totalItems / pageSize); //전체 페이지 수
//Math.ceil 올림함수 (ex) 21 / 5 = 5

//게시물을 표시할 컨테이너와 페이지 네비게이션을 표시할 컨테이너를 DOM에서 가져온다
const contentContainer = document.getElementById("content");
const paginationConatiner = document.getElementById("pagination");
const pagination = document.createElement("ul"); //페이지 번호를 나열할 <ul>요소 생성

//게시물 생성함수
function createPost(content){
  const post = document.createElement("div");
  post.classList.add("post");
  post.textContent = content; //게시물 내용 설정
  // textContent : HTML 요소의 텍스트 내용을 가져오거나 변경한다.
  return post; //게시물 <div> 반환
}

//페이지 번호 클릭시 이벤트 핸들러
function onPageClick(event){
  const currentPage = parseInt(event.target.textContent); //클릭된 페이지 번호를 숫자로 변환
  //페이지에 해당하는 게시물 표시함수 호출
  showPage(currentPage);

  //페이지 네비게이션 업데이트 함수 호출

}

//페이지에 해당하는 게시물 표시함수
function showPage(page){
  contentContainer.innerHTML = ''; //현재 표시된 게시물 초기화
  const startIdx = (page-1) * pageSize; //현재 페이지의 시작 인덱스 계산
  const endIdx = Math.min(startIdx + pageSize, totalItems); //현재 페이지 마지막 인덱스 계산
  //시작 인덱스부터 마지막 인덱스까지 반복하면서 게시물 생성 및 추가
  for(let i = startIdx; i < endIdx; i++){
    const post = createPost(`게시물 ${i+1}`); //게시물 생성
    contentContainer.appendChild(post); //게시물 컨테이너 추가
  }
}

