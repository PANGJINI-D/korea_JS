// 사용자 정보를 저장하는 함수 


// DB 빈 배열 생성
const DB = [];

// 사용자 정보를 받아서 저장하는 함수
const saveDB = (user) => {
    const beforeLength = DB.length;
    console.log(beforeLength);
    const afterLength = DB.push(user);
    // afterLength가 길이를 저장하는 이유는
    // .push 메서드가 배열의 끝에 새로운 요소를 추가하고, 그 길이를 반환하기 때문
    console.log(`[ 저장 ] ${user.name}`);

    //promise 객체를 생성해서 반환
    //DB에 사용자 정보를 추가하는 작업이 성공이면 RESOLVE, 실패면 REJECT 호출

    return new Promise((resolve, reject) => {
        if(beforeLength < afterLength) {
            // 사용자가 성공적으로 추가되면 resolve 호출, user 객체 전달
            resolve('user 추가 성공');
        } else {
            // 사용사 추가에 실패하면 reject 호축
            reject(new Error('저장되지 않았습니다.'));
        }
    })
}

// 사용자 정보를 받아서 이메일 전송 메시지 출력
const sendEmail = (user) => {
    console.log(`[ 이메일 전송 ] ${user.email}`);

    //사용자 정보를 이행하고 사용자 정보를 resolve 함수에 전달
    return new Promise((resolve) => {
        resolve(user);
    })
}

// 사용자 정보를 받아서 사용자 이름을 포함한 정보 반환
const getResult = (user) => {
    return new Promise((resolve) => {
        resolve(`[ 방문자 ] ${user.name}`);
    })
}


// 사용자 등록 함수
const register = (user) => {
    //promise 객체 생성 : Promise.all 메서드로 여러 promise를 동시에 실행하고 그 결과를 담은 promise 객체 완성
    const resultAsync = Promise.all([
        saveDB(user),
        sendEmail(user),
        getResult(user),
    ]);

    //resultAsync promise 객체가 이행될 때 실행
    resultAsync.then(console.log);
}

register({
    name : '어우 추워',
    email: 'pangpang@naver.com',
})