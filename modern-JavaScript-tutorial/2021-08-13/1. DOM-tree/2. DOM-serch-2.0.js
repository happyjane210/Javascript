// 자식노드 (child node, children): 부모 바로 아래 자식 노드
// 후손 노드(descendants) : 부모 아래 모든 자식노드, 모든 후손

// 엔터, 공백 텍스트 노드까지 모두 나옴
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

// 텍스트 노드 없이 html테그만 나옴
for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i]);
}

// 첫번째 텍스트 노드 (줄바꿈)
console.log(document.body.childNodes[0]); // #text
console.log(document.body.firstChild);  // #text
console.log(document.body.childNodes[0] === document.body.firstChild);  //true

// 첫번째 테그 (엘리먼트)
console.log(document.body.children[0]);     // div
console.log(document.body.firstElementChild);       // div
console.log(document.body.children[0] === document.body.firstElementChild);  // ture


console.log(document.body.childNodes[length]); // #text
console.log(document.body.lastChild);  //<script>
console.log(document.body.lastElementChild);  //<script>

// hasChildNodes =  함수 () 써줘야함
console.log(document.body.hasChildNodes());

