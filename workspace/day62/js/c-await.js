
const getName = async() => {
    return "짱짱구";
}

const printName = async() => {
    const name = await getName();
    // getName() 함수를 호출하고 해당 함수가 완료될 때 까지 기다린다.
    console.log(name);
    // 기다린 후에 받은 결과를 콘솔에 출력
}

printName();