// fetch 함수는 js가 제공하는 내장함수
// 네트워크 요청을 보내기 위해 사용함 (비동기 통신)
// get요청, promise객체 반환
fetch("https://jsonplaceholder.typicode.com/posts/100")
.then(response => {     // fetch가 성공적일 때 jsonplaceholder에서 통신 응답받기
                        // promise 결과로 받은 response 객체를 처리한다.
    if(!response.ok) {  // 응답받지 못한 경우 response의 http 응답상태 에러 출력
        throw new Error(`[response] ${response.status}`);
    }
    return response.json();     // response.ok가 true라면 response를 json으로 변환
}).then((post) => {    // json으로 변환된 response.json()결과를 post에 받아옴
    if(!post) {         // post가 false라면(null, undefined인지 확인)
        throw new Error(`none result`); // 결과가 없다고 출력
    } else {
        return {id:post.id, title:post.title}  // post가 true라면 객체의 id와 title 값 객체로 리턴
    }
}).then(console.log)    // 전달받은 post의 id, title 출력
.catch((error) => console.log(error));  // promise 실패 시 에러 출력, 모든 에러는 여기서 출력된다.
