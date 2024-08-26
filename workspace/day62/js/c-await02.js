const fetchData = async() => {
    //2초 후에 데이터 반환
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('데이터 로드 완료');
        }, 2000);
    })
}

const printData =  async() => {
    const data = await fetchData();
    console.log(data);
}

printData();