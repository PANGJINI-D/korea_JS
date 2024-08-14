// 프로토타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 한다.
// 프로토타입은 함수로 선언하여 사용한다.
// 반드시 대문자로 시작한다.

function User(id, pw, name, age, subject="js") {
    this.id=id;
    this.pw=pw;
    this.name=name;
    this.age=age;
    this.subject=subject;
}

user1 = new User("abc", 1234, "짱구", 5);
user2 = new User("xyz", 1234, "유리", 9);

console.log(user1);


// 클래스 문법
class User2 {
    constructor(id, pw, name, age, subject) {
        this.id = id;
        this.pw = pw;
        this.name = name;
        this.age = age ;
        this.subject = subject;
    }
}

const user3 = new User2("kkk", 1234, "황진", 20, "추워");
console.log(user3);