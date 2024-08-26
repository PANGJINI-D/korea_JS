
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then(console.log);

// 사용자가 서버에 뭔가 요청할 때 --> request 요청
// 서버가 사용자에게 응답할 때 --> response 응답

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    // console.log(response.ok);   //true -> 이 페이지가 정상 페이지이다.(응답 가능)

    if(!response.ok) {
        throw new Error(`[response] ${response.status}`);
    }
    return response.json;
}).then((post) => {
    if(!post) {
        throw new Error(`none result`);
    } else {
        return {id : post.id, title:post.title}
    }
}).then(console.log);