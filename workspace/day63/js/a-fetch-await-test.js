// a-fetch-test01.js 를 async, await로 바꾸기

// zipcode데이터 가져오기
const fetchUsers = async(callback) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
}

// 데이터 출력하기
const printZipcode = async() => {
    const users = await fetchUsers();
    const zipcodes = users.map((user) => user.address.zipcode);
    console.log(zipcodes);
}

printZipcode();





// 🌟강의 코드
async function fetchZipcodes(){
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
  
      if(!response.ok){
        throw new Error(`response : ${response.status}`);
      }
      const users = await response.json();
  
      if(!users || users.length === 0){
        throw new Error(`none result`);
      }
  
      const zipcodes = users.map((user) => user.address.zipcode);
      console.log(zipcodes);
    } catch(error){
      console.log(error);
    }
  }
  
  fetchZipcodes();