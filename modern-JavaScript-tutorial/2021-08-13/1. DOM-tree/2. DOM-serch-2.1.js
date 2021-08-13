// DOM 컬랙션
// childNodes 는 배열이 아님, 반복가능(iterable)한 배열이랑 비슷한 객채 컬렉션 (collection)
// for .. of 사용가능 / 배열 매서드 사용불가능

for (let node of document.body.childNodes) {
    console.log(node);
};

for (let elem of document.body.children) {
    console.log(elem);
};

// 노드에서 배열 매서드 쓰려면 Array.from()
console.log(document.body.childNodes.filter); // undefined
console.log(Array.from(document.body.childNodes).filter);  //  function filter() { [native code] }

// 같은 부모를 가진 노드는 형제노드(sibling node)
// nextSibling(왼쪽)  /  previousSibling(오른쪽)
// 부모 노드는 : parentNode

// <html> 태그 전체가 나옴
console.log(document.documentElement); // 도큐먼트 요소
console.log(document.body.parentNode); // 바디의 부모노드
console.log(document.documentElement === document.body.parentNode); //true

console.log(document.head.nextSibling);  //#text
console.log(document.body.previousSibling);  //#text

console.log(document.head.nextElementSibling); //<body>
console.log(document.body.previousElementSibling); //<head>




