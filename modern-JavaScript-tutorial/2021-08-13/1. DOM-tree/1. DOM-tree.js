// 돔 트리에 있는 노드는 모두 객체. document도 DOM 객체
// 돔 구성요소중 html 내에서 띄어쓰기, 엔터도 모두 #text node

//<head> 위 이전 공백과 줄바꿈은 무시, </body> 밖에 있는 컨텐츠도 무시.

// html 에서 tbody 쓰지 않아도 브라우저에서 자동으로 tbody 생성함

// 주석노드 타입: comment node

// 실무에서 자주 다루는 노드 타입
// 1. DOM의 진입점이 되는, 문서 노드 (document)
// 2. html 태그에서 만들어지는,  DOM tree를 구성하는 블록, 요소노드(element node)
// 3. 텍스트를 포함하는, 텍스트 노드 (text node)
// 4. 화면에 보이지 않지만 자바스크립트를 사용해 DOM에서 읽을 수 있는 주석노드(commend node)


// 콘솔에서 $0 : 가장 마지막에 선택했던 요소,  $1 :  그 이전에 선택했던 요소
// $0.style.background = "red" 마지막에 봤던 요소 빨간 표시
// inspect(node) <= $1, $0