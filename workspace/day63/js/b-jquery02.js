let $boxes = $('.div-box');
console.log($boxes);

console.log($boxes[2]); //★js 객체
//jQuery 객체에서 인덱스를 사용해 접근한 요소는 일반적인 DOM 요소로 반환된다
//따라서 jQuery 객체가 아닌 순수 DOM 객체이다
let element = $boxes[1];    //★jquery 객체
element.style.backgroundColor = "red";

console.log($boxes.eq(2));
$boxes.eq(2).css('background-color', "blue");
//.eq 메소드를 사용하여 jQuery 객체에서 특정 인덱스에 있는 요소를 선택하여 새로운 jQuery 객체로 반환된다



//jQuery 이용해서 사용할 것
//1. li 태그 전체 가져오기
let $liTags = $('li');
console.log($liTags);

//2. 클래스 이름이 product인 태그 전체 가져오기
let $productTags = $('.product');
console.log($productTags);

//3. boxes 자식 태그 중 첫번재 자식 가져오기
let $boxesChild = $('.div-box').children().first();
console.log($boxesChild)
//없는 값일 때 length : 0 으로 출력된다

//4. ul 태그의 부모태그 가져오기
console.log($('ul').parent());

//5. li 태그의 부모태그 가져오기
console.log($('li').parent());

//6. ul 태그 자식 중에서 0번째 인덱스 가져오기
console.log($('ul').children().eq(0));

//7. ul 태그 자식 중에서 2번째 인덱스 가져오기
console.log($('ul').children().eq(2));