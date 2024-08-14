// 💜객체
// const로 선언 가능하다.
// 변수로 const 키워드를 사용하는 경우, 상수이기 때문에 재할당이 안된다.
// 객체에서는 재할당이 가능하다.

const user = {
    name:"황진",
    age: 20,
    address: "부천시",
    
    // 메서드
    introduce : () => {
        console.log("안녕하세여");
    }
};

console.log(user, typeof(user));
console.log(user['address']);
user.introduce();


// 1. programming 객체 생성
// 프로퍼티 키: pro1 ~ pro4
// 프로퍼티 값 : java, dbms, html/css, js
// 2. 객체 출력
// 3. js민 출력하기
const programming = {
    pro1:'java',
    pro2:'dbms',
    pro3:'html/css',
    pro4:'js',
};
console.log(programming);
console.log(programming.pro4);
console.log(programming['pro4']);

//pro1의 값을 자바로 변경
programming.pro1 = "자바";
console.log(programming);

//새로운 키 넣기
programming.pro5 = "git";
console.log(programming);       // { pro1: '자바', pro2: 'dbms', pro3: 'html/css', pro4: 'js', pro5: 'git' }

//programming 객체의 깂을 하나씩 출력
for(let i in programming) {
    console.log(programming[i]);
    console.log(i);     //pro1, pro2, pro3, ... key가 출력된다!!
}