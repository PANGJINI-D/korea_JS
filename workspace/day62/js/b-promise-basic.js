// promise

// resolve : 제대로 실행됐을 때
// reject : 제대로 실행되지 않았을 때
const promise = new Promise((resolve, reject) => {
    let check = false;
    if(check) {
        resolve('성공');
    }else {
        reject('실패');
    }
})

// console.log(promise);
// promise 객체는 출력되지 않는다.
// 비동기 작업의 결과를 다루기 때문에, 객체 자체의 상태 출력하지 않고
// promise 객체가 이행되거나, 거절되었을 때의 결과를 출력한다.

promise.then(console.log).catch(console.log);
// promise 객체의 then 메서드를 호출
// then 메서드는 성공적으로 이행한 결과를 처리하고
// catch 메서드는 거부된 결과를 처리한다.