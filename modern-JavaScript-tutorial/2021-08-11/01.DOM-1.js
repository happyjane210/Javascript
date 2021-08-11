// DOM = document , 브라우저의 최상위, 그 위에 최고 상위 window = 창
// html 도 DOM의 객체임
// node 노드는 요소
//  html과 상호작용 하는 애는 무조검 "",'' 써줘야함. 그래야 인식함

const button = document.getElementById("my-button");
//const button = document.querySelector("#my-button");
const button2 = document.querySelector(".other-button"); //css 선택자 : selector
const table = document.getElementById("table");

table.style.border = "solid 2px black"
table.style.backgroundColor = "lightblue"

table.innerText = "그런가요?"
button.innerText = "이것은 버튼"
button.style.backgroundColor = "pink"
button.style.borderRadius = "10px"



function changeBackGroundColor(color) {
    document.body.style.backgroundColor = color;
}


button.addEventListener("click", function () { changeBackGroundColor("blue") });
// click 했을때, changeBackGroundColor 함수 실행, 얘는 콜백 함수라서 괄호 쓰지 않음
button2.addEventListener("click", function () { changeBackGroundColor("red") });