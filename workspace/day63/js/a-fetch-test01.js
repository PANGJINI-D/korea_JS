// fetch("https://jsonplaceholder.typicode.com/users")
// zipcode만 추출하기  -> users. address. zipcode

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    if(!response.ok) {
        console.log(`[error] ${response.status}`);
    }
    return response.json();
}).then((users) => {
    if(!users || users.length===0) {    //null이거나 길이가 0일 때
        console.log(`결과가 없음`);
    }
    const zipcodes = users.map((user) => {
        return user.address.zipcode;
    });
    return zipcodes;
}).then(console.log);

// [
//     '92998-3874', '90566-7771',
//     '59590-4157', '53919-4257',
//     '33263',      '23505-1337',
//     '58804-1099', '45169',
//     '76495-3109', '31428-2261'
//   ]

//🌟강의 코드
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   if(!response.ok){
//     throw new Error(`response : ${response.status}`);
//   }
//   return response.json();
// }).then((users) => {
//   if(!users || users.length == 0){
//     throw new Error(`none result`);
//   }
//   return users.map((user) => user.address.zipcode);
// }).then(console.log).catch((error) => {console.log(error)});