const DB = [];

const saveDB = (user) => {
    // setTimeout(callback, delay)
    setTimeout(() => {
        const beforeLength = DB.length;
        const afterLength = DB.push(user);

        return new Promise((resolve, reject) => {
            if(beforeLength < afterLength) {
                resolve(user);
                console.log(`${user.name}의 정보가 저장되었습니다.`);
            } else {
                reject(new Error('저장되지 않았습니다.'));
            }
        })
    }, 3000);   //3초 후 실행
}

//사용자 정보를 받아서 이메일 전송 메시지 출력
const sendEmail = (user) => {
    // 사용자 정보를 promise 이행하고, 사용자 정보를 resolve 전달
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(user);     
            console.log(`[이메일 전송] ${user.email}`);
        }, 5000);   //5초 후 실행
    })
}

//사용자 정보를 받아서 이름을 포함한 정보 반환
const getResult = (user) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`[방문자] ${user.name}`);
        }, 500);    //0.5초 후 실행
    })
}

//사용자 등록
const register = (user) => {
    const resultAsync = Promise.all([
        saveDB(user),            //undefined  --> return값을 saveDB가 가진 것이 아니라 setTimeout이 가짐.
        sendEmail(user),
        getResult(user),
    ])
    resultAsync.then(console.log);
}

register({
    name : '어우 추워',
    email : '진짜추워@naver.com'
})