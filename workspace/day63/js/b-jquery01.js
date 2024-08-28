// jquery의 변수명 앞에는 $가 붙는다.
// 선택자도 $()로 선택한다.
let $box2 = $('.box2');
console.log($box2);

console.log($box2.parent()); //부모요소인 main요소가 선택됨
console.log($box2.parents()); //조상요소인 main, body, html이 선택됨
console.log($box2.prev()); //형 요소인 box1이 선택됨
console.log($box2.nextAll()); //동생요소 box3, box4가 선택됨
console.log($box2.nextAll()[1]); //인덱스 번호로 box4만 선택됨

//클래스 이름으로 가져온 모든 요소 중 2번째 인덱스 요소 선택
console.log($('.div-box').eq(2));
console.log($('.div-box'));