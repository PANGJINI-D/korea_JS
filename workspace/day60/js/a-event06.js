NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.forEach = Array.prototype.forEach;

const all = document.querySelector(".all");
const terms = document.querySelectorAll("input.term");

// 전체동의를 눌렀을 때 발생하는 이벤트 리스너
all.addEventListener("click", () => {
    terms.forEach((term) => {
        term.checked = all.checked;
    })
})

// 약관동의 체크박스를 클릭할 때마다 실행되는 이벤트 리스너
terms.forEach(term => {
    term.addEventListener("click", (e) => {
        all.checked = terms.map((term) => term.checked)
                            .filter((checked) => checked).length === 3;
        //terms.map((term) => term.checked) : 약관동의(3개) 체크박들의 checked 속성값을 배열로 매핑
        //filter((checked) => checked) : checked가 true인 요소만 걸러냄
        //length === 3; : 체크박스에 선택된 개수가 3개인지 확인

    });
});